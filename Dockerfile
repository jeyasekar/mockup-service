# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-alpine

#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}


ENV MODE=PROD
ENV API_GATEWAY_PORT=3000

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./


# Install dependencies
RUN npm clean-install

# Copy local code to the container image.
COPY . ./

# Build the application
RUN npm run build


# Run the web service on container startup.
CMD [ "npm", "run", "start:dev" ]
