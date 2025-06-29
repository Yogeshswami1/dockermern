# Step 1: Node base image
FROM node:18

# Step 2: Create working directory inside container
WORKDIR /app

# Step 3: Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy rest of the files
COPY . .

# Step 5: Expose backend port
EXPOSE 5000

# Step 6: Start the app
CMD ["npm", "start"]
