# Use Node.js version 14 as base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./SubtractionService/ . 

# Expose the port your app runs on
EXPOSE 3002

# Command to run your app using node
CMD ["node", "index.js"]
