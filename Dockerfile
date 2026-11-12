# Build stage: compile the React app with Vite
FROM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Public ChatForge widget key, baked in by Vite at build time.
# Set it as a build-time variable in Coolify (or `--build-arg`).
ARG VITE_CHATFORGE_API_KEY
ENV VITE_CHATFORGE_API_KEY=$VITE_CHATFORGE_API_KEY

RUN npm run build

# Runtime stage: serve the static files with nginx
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Lets Coolify (and docker ps) report the container as healthy once nginx serves the page
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1/ || exit 1
