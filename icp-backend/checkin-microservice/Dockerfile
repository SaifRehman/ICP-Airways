FROM node:9.8.0
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3001
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
CMD [ "node", "dist/main.js" ]
