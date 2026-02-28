FROM python:3.12-slim-bookworm
WORKDIR /app

RUN pip install --no-cache-dir aegra-cli langchain-mcp-adapters langchain-openai

COPY . .

EXPOSE 8000

CMD ["sh", "-c", "echo 'DB_URL_SET='$(test -n \"$DATABASE_URL\" && echo YES || echo NO) && aegra serve --host 0.0.0.0 --port 8000 2>&1; sleep 30"]
