FROM ibmcom/db2express-c:latest
ENV DB2INST1_PASSWORD=db2inst1-pwd
ENV LICENSE=accept
COPY . .
USER root
RUN chmod +x run.sh
RUN [ "./run.sh" ]
CMD su - db2inst1 -c 'db2start'