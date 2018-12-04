FROM node:9.8.0
COPY . .
EXPOSE 7000 
RUN  npm i 
RUN npm i -g webpack webpack-cli
RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
CMD [ "node", "dist/bundle-be.js" ]