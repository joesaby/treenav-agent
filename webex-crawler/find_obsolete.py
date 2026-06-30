import os
import glob
import re
from pathlib import Path

root = Path(__file__).resolve().parent
doc_dir = root / "webex-docs"
files = glob.glob(f"{doc_dir}/**/*.md", recursive=True)
doc_dir = str(doc_dir)

obsolete_files = []
no_content_files = []

for file_path in files:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Remove YAML frontmatter
        match = re.search(r"^---\n.*?\n---\n", content, flags=re.DOTALL)
        if match:
            body = content[match.end():]
        else:
            body = content
            
        body = body.strip()
        lower_body = body.lower()
        
        # Check for obsolete phrases
        obsolete_phrases = [
            "have been moved to cisco",
            "has been moved to cisco",
            "moved to cisco.com",
            "no longer supported",
            "has been retired",
            "article has been archived"
        ]
        
        is_obsolete = any(phrase in lower_body for phrase in obsolete_phrases)
        
        # Consider a document to have "no content" if it's extremely short
        # (e.g. just a heading, or empty after frontmatter)
        # Exclude files that are already marked obsolete
        is_no_content = not is_obsolete and len(body) < 30
        
        if is_obsolete:
            obsolete_files.append(file_path)
        elif is_no_content:
            no_content_files.append(file_path)

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

obsolete_files.sort()
no_content_files.sort()

output_file = root / "dry_run_results.txt"
with open(output_file, "w", encoding="utf-8") as f:
    f.write("=== OBSOLETE FILES (Moved, Retired, etc.) ===\n")
    for path in obsolete_files:
        f.write(f"- {os.path.relpath(path, doc_dir)}\n")
    f.write(f"\nTotal obsolete files: {len(obsolete_files)}\n\n")
    
    f.write("=== LOW / NO CONTENT FILES ===\n")
    for path in no_content_files:
        f.write(f"- {os.path.relpath(path, doc_dir)}\n")
    f.write(f"\nTotal no content files: {len(no_content_files)}\n")

print(f"Analysis complete. Found {len(obsolete_files)} obsolete and {len(no_content_files)} no-content files.")
print(f"Results saved to {output_file}")
