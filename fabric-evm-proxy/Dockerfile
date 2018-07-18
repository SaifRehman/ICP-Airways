FROM golang:1.9.2 as builder
ARG SOURCE_LOCATION=/
COPY . /go/
WORKDIR ${SOURCE_LOCATION}
RUN apt-get update -y
RUN install libltdl-dev -y 
RUN mkdir go/src/github.com
RUN mkdir go/src/github.com/hyperledger
RUN ls go/src/github.com
RUN apt-get install git
RUN cd /go/src/github.com/hyperledger; git clone https://github.com/SaifRehman/fabric-chaincode-evm.git ; cd fabric-chaincode-evm; ETHSERVER_CONFIG=/go/fabric-cluster.yml go run main.go