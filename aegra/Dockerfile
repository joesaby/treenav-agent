FROM python:3.12-slim-bookworm
WORKDIR /app

RUN pip install --no-cache-dir aegra-cli langchain-mcp-adapters langchain-openai

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "echo 'PORT='$PORT && AEGRA_CONFIG=/app/aegra.json python3 -m uvicorn aegra_api.main:app --host 0.0.0.0 --port ${PORT:-8000} 2>&1; echo 'EXIT:'$?; sleep 600"]
