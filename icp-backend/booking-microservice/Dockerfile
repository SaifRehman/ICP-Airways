FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3003 50000
CMD [ "node", "dist/main.js" ]
