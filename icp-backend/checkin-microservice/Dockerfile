FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3004 50000
CMD [ "node", "dist/main.js" ]
