FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
COPY .env ./
COPY dist ./
COPY . .
RUN npm install
EXPOSE 3000 50000
CMD [ "node", "dist/main.js" ]