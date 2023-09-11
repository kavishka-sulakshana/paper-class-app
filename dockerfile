FROM node:18-alpine
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]


CMD ["node", "server.js"]
