# Use official Node.js image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the code
COPY . .

# Expose the port
EXPOSE 7860

# Set environment variable for port (HF uses 7860)
ENV PORT=7860

# Start the app
CMD ["npm", "start"]