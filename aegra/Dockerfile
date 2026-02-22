FROM ibbybuilds/aegra:latest

WORKDIR /app

# Install additional Python dependencies
COPY requirements.txt /tmp/requirements.txt
RUN pip install --no-cache-dir -r /tmp/requirements.txt

# Copy custom LangGraph graph
COPY graphs/ /app/graphs/

EXPOSE 8000

CMD ["python", "run_server.py"]
