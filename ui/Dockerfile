# Build stage
FROM node:20-alpine AS build

WORKDIR /app

COPY ui/package.json ui/package-lock.json* ./
RUN npm install

COPY ui/ .
RUN npm run build

# Production stage
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
COPY ui/nginx.conf /etc/nginx/nginx.conf.template

ENV PORT=80

CMD sh -c "sed 's/__PORT__/'\"$PORT\"'/g' /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
