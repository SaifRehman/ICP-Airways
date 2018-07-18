/*
Copyright IBM Corp. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

package ethserver_test

import (
	"fmt"

	"github.com/hyperledger/fabric-chaincode-evm/ethserver"
	"github.com/onsi/ginkgo/config"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

var _ = Describe("EthServer", func() {
	var (
		server     *ethserver.EthServer
		serverAddr string
		port       int
	)
	BeforeEach(func() {
		server = ethserver.NewEthServer(ethserver.NewEthService())
		port = 5000 + config.GinkgoConfig.ParallelNode
		go func() {
			server.Start(port)
		}()
		serverAddr = fmt.Sprintf("http://127.0.0.1:%d", port)
	})

	AfterEach(func() {
		server.Stop()
	})

	// Describe("WEB3", func() {
	// 	Context("client version", func() {
	// 		It("returns the client verstion", func() {
	// 			jsonRequest := `{
	// 			"jsonrpc" : "2.0",
	// 			"method" : "web3_clientVersion",
	// 			"params" : [],
	// 			"id" : 67
	// 		}`

	// 			res, err := http.Post(serverAddr, "", strings.NewReader(jsonRequest))
	// 			Expect(err).ToNot(HaveOccurred())
	// 			defer res.Body.Close()

	// 			body, err := ioutil.ReadAll(res.Body)
	// 			Expect(err).ToNot(HaveOccurred())
	// 			Expect(body).To(ContainSubstring("0.0"))

	// 			Expect(err).ToNot(HaveOccurred())
	// 			Expect(res.StatusCode).To(Equal(http.StatusOK))
	// 		})
	// 	})
	// })

	XDescribe("ETH", func() {
		Context("Get Code", func() {
			It("gets the code associated with the contract", func() {
			})
		})
	})
})
