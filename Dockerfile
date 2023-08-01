# Use an appropriate version of the Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies using npm ci for production environment
RUN npm ci --only=production

# Define the entry point for the container
CMD ["npm", "start"]