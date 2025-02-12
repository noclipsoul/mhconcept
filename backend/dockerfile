FROM node:20-alpine

# Installing necessary packages
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Set environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /opt/

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN  npm install

# Set PATH
ENV PATH=/opt/node_modules/.bin:$PATH

# Copy application files
WORKDIR /opt/app
COPY . .

# Set permissions
RUN chown -R node:node /opt/app
USER node

# Build application
RUN npm run build

# Expose port
EXPOSE 1337

# Command to run the application
CMD ["npm", "run", "develop"]
