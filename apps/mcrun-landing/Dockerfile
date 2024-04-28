# Stage 1: Build the Angular application
FROM node:20 as build-step

# Set the working directory to the root of the project
WORKDIR /app

# Copy the package.json and package-lock.json from the root project folder
COPY ../../package.json ../../package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY ../../ .

# Build the application for production using NPX to run Nx
RUN npx nx build mcrun-landing --prod

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built files from the build-step to the Nginx server
COPY --from=build-step /app/dist/apps/mcrun-landing /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
