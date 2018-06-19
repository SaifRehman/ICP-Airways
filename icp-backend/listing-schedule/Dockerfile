FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3002 
CMD [ "node", "dist/main.js" ]
