# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY ui/package.json ui/package-lock.json* ./
RUN npm install

COPY ui/ .
RUN npm run build

# Production stage
FROM node:20-alpine

RUN npm install -g serve

COPY --from=build /app/dist /app/dist

EXPOSE 8080

CMD ["serve", "-s", "/app/dist", "-l", "tcp://0.0.0.0:8080"]
