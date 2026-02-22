FROM node:20-alpine

WORKDIR /app

# Install doctree-mcp
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy server entrypoint and default docs
COPY server.js ./
COPY docs/ /docs/

EXPOSE 3001

CMD ["node", "server.js"]
