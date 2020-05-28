FROM node:current-alpine

# Create app directory
WORKDIR /app


COPY package*.json ./

RUN npm install --production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "src/main.js" ]