FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000 5000
CMD [ "node", "dist/main.js" ]
