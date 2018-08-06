FROM node
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm i -g gulp-cli
RUN npm install -g moneyd moneyd-uplink-xrp ilp-spsp ilp-spsp-server moneyd-gui --unsafe
RUN gulp scripts
RUN moneyd xrp:configure --testnet
RUN chmod +x run.sh
EXPOSE 3066 7770 7769
ENTRYPOINT [ "./run.sh" ]
# RUN groupadd -g 999 appuser && \
#     useradd -r -u 999 -g appuser appuser
# USER appuser
# CMD [ "node", "dist/main.js" ]
