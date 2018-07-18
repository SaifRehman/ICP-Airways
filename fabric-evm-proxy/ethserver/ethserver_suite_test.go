/*
Copyright IBM Corp. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

package ethserver_test

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"

	"testing"
)

func TestEthserver(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Ethserver Suite")
}
