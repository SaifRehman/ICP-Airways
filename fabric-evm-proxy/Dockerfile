FROM golang:1.9.2 as builder
RUN apt clean
RUN rm -rf /var/lib/apt/lists/*
RUN apt clean
RUN apt update
RUN apt-get install -y libltdl-dev 
ARG SOURCE_LOCATION=/
COPY . /go/
WORKDIR ${SOURCE_LOCATION}
RUN mkdir go/src/github.com
RUN mkdir go/src/github.com/hyperledger
RUN ls go/src/github.com
RUN cd /go/src/github.com/hyperledger; git clone https://github.com/SaifRehman/fabric-chaincode-evm.git 
ENTRYPOINT cd /go/src/github.com/hyperledger/fabric-chaincode-evm; ETHSERVER_CONFIG=/go/fabric-cluster.yml go run main.go
EXPOSE 5000