# ====== Build React/Vite ======
FROM node:20-alpine AS builder
WORKDIR /app

# 1) Copie du code (sans node_modules si possible)
COPY . .

# 2) Install (utilise lockfile si présent)
RUN npm ci

# 3) Build (Vite -> dist / CRA -> build)
ARG BUILD_DIR=dist
RUN npm run build

# ====== Nginx ======
FROM nginx:1.27-alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/ /usr/share/nginx/html/
EXPOSE 80
