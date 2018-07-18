/*
Copyright IBM Corp. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/hyperledger/fabric-chaincode-evm/ethserver"
)

func main() {
	configFile := os.Getenv("ETHSERVER_CONFIG")
	user := os.Getenv("ETHSERVER_USER")
	if user == "" {
		user = "User1"
	}

	channel := os.Getenv("ETHSERVER_CHANNEL")
	if channel == "" {
		channel = "channel1"
	}

	ethService := ethserver.NewEthService(configFile, user, channel)
	server := ethserver.NewEthServer(ethService)

	var portNumber int
	port := os.Getenv("PORT")
	if port != "" {
		var err error
		portNumber, err = strconv.Atoi(port)
		if err != nil {
			panic("Error converting value of environment variable PORT to int")
		}
	} else {
		portNumber = 5000
	}

	fmt.Printf("Starting server at http://0.0.0.0:%d", portNumber)

	server.Start(portNumber)
}
