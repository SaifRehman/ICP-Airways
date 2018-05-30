FROM node:carbon
WORKDIR /usr/src/app
COPY .env ./
COPY dist ./
RUN npm install
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
