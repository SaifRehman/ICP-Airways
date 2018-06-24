FROM node:9.8.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3002 
CMD [ "node", "dist/main.js" ]
