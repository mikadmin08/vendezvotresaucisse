# ====== Build React ======
FROM node:20-alpine AS builder
WORKDIR /app

# Copie des manifests et install (rapide & reproductible)
COPY package*.json ./
RUN npm ci --include=dev

# Copie du code et build
COPY . .
ARG BUILD_DIR=build  # pour Vite: passez à dist via --build-arg BUILD_DIR=dist
RUN npm run build

# ====== Nginx pour servir les fichiers statiques ======
FROM nginx:1.27-alpine

# Conf Nginx personnalisée avec proxy vers l'API
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Copie des artefacts du build React
ARG BUILD_DIR=build
COPY --from=builder /app/${BUILD_DIR}/ /usr/share/nginx/html/

# Nginx écoute déjà sur 80
EXPOSE 80
