# Backend Dockerfile
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the port the backend will run on
EXPOSE 3000

# Start the backend server
CMD [ "npm", "start" ]