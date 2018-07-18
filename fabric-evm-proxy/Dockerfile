FROM golang:1.9.2 as builder
RUN apt-get clean
RUN  rm -r /var/lib/apt/lists/* -vf
RUN apt-get clean
RUN apt-get update 
RUN install  libltdl-dev 
ARG SOURCE_LOCATION=/
COPY . /go/
WORKDIR ${SOURCE_LOCATION}
RUN mkdir go/src/github.com
RUN mkdir go/src/github.com/hyperledger
RUN ls go/src/github.com
RUN cd /go/src/github.com/hyperledger; git clone https://github.com/SaifRehman/fabric-chaincode-evm.git ; cd fabric-chaincode-evm; ETHSERVER_CONFIG=/go/fabric-cluster.yml go run main.go
EXPOSE 5000