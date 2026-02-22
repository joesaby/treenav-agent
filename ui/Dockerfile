# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY ui/package.json ui/package-lock.json* ./
RUN npm install

COPY ui/ .

# VITE_API_URL must be set at build time (Vite bakes import.meta.env into the bundle)
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Production stage
FROM node:20-alpine

RUN npm install -g serve

COPY --from=build /app/dist /app/dist

EXPOSE 80

CMD ["serve", "-s", "/app/dist", "-l", "tcp://0.0.0.0:80"]
