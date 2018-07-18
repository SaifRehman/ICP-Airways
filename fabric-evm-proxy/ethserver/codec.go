/*
Copyright IBM Corp. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

package ethserver

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gorilla/rpc/v2"
	"github.com/gorilla/rpc/v2/json2"
)

type rpcCodec struct {
	codec *json2.Codec
}

type codecRequest struct {
	rpc.CodecRequest
}

func NewRPCCodec() rpc.Codec {
	codec := json2.NewCodec()
	return &rpcCodec{codec: codec}
}

func (c *rpcCodec) NewRequest(r *http.Request) rpc.CodecRequest {
	req := c.codec.NewRequest(r)
	return &codecRequest{req}
}

func (r *codecRequest) Method() (string, error) {
	m, err := r.CodecRequest.Method()
	if err != nil {
		return "", err
	}
	method := strings.Split(m, "_")
	modifiedMethod := fmt.Sprintf("%s.%s", method[0], strings.Title(method[1]))
	fmt.Println("Request came in for this method: ", modifiedMethod)
	return modifiedMethod, nil
}
