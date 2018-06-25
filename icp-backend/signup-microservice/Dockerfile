FROM node:9.8.0
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3004 
CMD [ "node", "dist/main.js" ]
