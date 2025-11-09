FROM node:20-alpine
WORKDIR /api

# Manifests d'abord pour cache des deps
COPY package*.json ./
RUN npm ci --omit=dev

# Code de l'API
COPY . .

ENV NODE_ENV=production
ENV PORT=3001
EXPOSE 3001

# IMPORTANT : votre package.json doit avoir "start": "node server.js"
CMD ["npm", "run", "start"]
