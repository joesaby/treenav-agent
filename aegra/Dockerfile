FROM python:3.12-slim-bookworm
WORKDIR /app

RUN pip install --no-cache-dir aegra-cli langchain-mcp-adapters langchain-openai

COPY . .

EXPOSE 8080

CMD ["aegra", "serve", "--host", "0.0.0.0", "--port", "8080"]
