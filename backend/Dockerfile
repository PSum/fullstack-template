# Use a base Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Expose the desired port (assuming your Express server runs on port 3000)
EXPOSE 3000

# Start the server using Nodemon
CMD ["npm", "run", "start"]
