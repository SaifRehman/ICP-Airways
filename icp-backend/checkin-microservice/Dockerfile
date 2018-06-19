FROM node:carbon
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "node", "dist/main.js" ]
