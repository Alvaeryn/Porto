# Build stage
FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM node:20-slim AS production

WORKDIR /app

COPY --from=build /app/dist ./dist

# Install simple http server
RUN npm install -g http-server

EXPOSE 7860

CMD ["http-server", "dist", "-p", "7860", "-a", "0.0.0.0"]