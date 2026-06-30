import os
import glob
from pathlib import Path

from ollama import Client

client = Client(host='http://127.0.0.1:11434')

root = Path(__file__).resolve().parent.parent
doc_dir = root / "webex-docs"
files = glob.glob(f"{doc_dir}/**/*.md", recursive=True)
doc_dir = str(doc_dir)

obsolete_files = []
no_content_files = []
valid_files = []
failed_files = []

# Evaluate the 195 candidate files flagged by the old script
candidate_files = []
try:
    with open(Path(__file__).resolve().parent / "dry_run_results.txt", "r") as f:
        for line in f:
            if line.startswith("- "):
                rel_path = line[2:].strip()
                candidate_files.append(os.path.join(doc_dir, rel_path))
except FileNotFoundError:
    print("Could not find previous dry_run_results.txt. Evaluating all files. This might take a while.")
    candidate_files = files

print(f"Evaluating {len(candidate_files)} candidate files using local Llama 3.2 via Ollama...")

prompt_instruction = """
You are an expert document classifier. 
Your task is to analyze the provided markdown document and determine if the ENTIRE document is obsolete, or if it has no meaningful content.

Rules for classification:
- Return "OBSOLETE" only if the document's main purpose is to state that the article has been moved, retired, archived, or is no longer supported overall.
- Return "VALID" if the document contains actual product documentation, release notes, or instructions. If it mentions that a *specific feature* within the product is no longer supported, it is STILL VALID.
- Return "NO_CONTENT" if the document is essentially empty (e.g., just a title or frontmatter, with no real body text).

Output ONLY one of the following exact words: "OBSOLETE", "VALID", or "NO_CONTENT". No other text.

"""

for i, file_path in enumerate(candidate_files):
    if not os.path.exists(file_path):
        continue
        
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        response = client.chat(model='gemma3:4b', messages=[
            {
                'role': 'system',
                'content': prompt_instruction
            },
            {
                'role': 'user',
                'content': "Document Content:\n" + content
            }
        ])
        
        result = response['message']['content'].strip().upper()
        
        if "OBSOLETE" in result and "VALID" not in result:
            obsolete_files.append(file_path)
            print(f"[{i+1}/{len(candidate_files)}] {os.path.basename(file_path)} -> OBSOLETE")
        elif "NO_CONTENT" in result and "VALID" not in result:
            no_content_files.append(file_path)
            print(f"[{i+1}/{len(candidate_files)}] {os.path.basename(file_path)} -> NO_CONTENT")
        elif "VALID" in result:
            valid_files.append(file_path)
            print(f"[{i+1}/{len(candidate_files)}] {os.path.basename(file_path)} -> VALID")
        else:
            print(f"[{i+1}/{len(candidate_files)}] {os.path.basename(file_path)} -> UNKNOWN RESULT: {result}")
            failed_files.append(file_path)

    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        failed_files.append(file_path)

obsolete_files.sort()
no_content_files.sort()
valid_files.sort()

output_file = Path(__file__).resolve().parent / "dry_run_results_llm.txt"
with open(output_file, "w", encoding="utf-8") as f:
    f.write("=== OBSOLETE FILES (Moved, Retired, etc.) ===\n")
    for path in obsolete_files:
        f.write(f"- {os.path.relpath(path, doc_dir)}\n")
    f.write(f"\nTotal obsolete files: {len(obsolete_files)}\n\n")
    
    f.write("=== LOW / NO CONTENT FILES ===\n")
    for path in no_content_files:
        f.write(f"- {os.path.relpath(path, doc_dir)}\n")
    f.write(f"\nTotal no content files: {len(no_content_files)}\n\n")
    
    f.write("=== FILES PREVIOUSLY FLAGGED BUT NOW CONSIDERED VALID ===\n")
    for path in valid_files:
        f.write(f"- {os.path.relpath(path, doc_dir)}\n")
    f.write(f"\nTotal valid files: {len(valid_files)}\n")

print("\n--- Summary ---")
print(f"Obsolete: {len(obsolete_files)}")
print(f"No Content: {len(no_content_files)}")
print(f"Valid (False Positives from before): {len(valid_files)}")
print(f"Failed to process: {len(failed_files)}")
print(f"Results saved to {output_file}")
