/*
Copyright IBM Corp. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

package statemanager

import (
	"errors"

	"github.com/hyperledger/burrow/account"
	"github.com/hyperledger/burrow/binary"
	"github.com/hyperledger/fabric/core/chaincode/shim"
)

type StateWriter interface {
	GetAccount(address account.Address) (account.Account, error)
	GetStorage(address account.Address, key binary.Word256) (binary.Word256, error)
	UpdateAccount(updatedAccount account.Account) error
	RemoveAccount(address account.Address) error
	SetStorage(address account.Address, key, value binary.Word256) error
}

type stateWriter struct {
	stub shim.ChaincodeStubInterface
}

func (s *stateWriter) GetAccount(address account.Address) (account.Account, error) {
	code, err := s.stub.GetState(address.String())
	if err != nil {
		return nil, err
	}

	acc := account.ConcreteAccount{
		Address: address,
		Balance: 0,
		Code:    convertToBytecode(code),
	}

	return acc.Account(), nil

}

func (s *stateWriter) GetStorage(address account.Address, key binary.Word256) (binary.Word256, error) {
	val, err := s.stub.GetState(key.String())
	if err != nil {
		return binary.Word256{}, err
	}

	if len(val) != binary.Word256Length {
		return binary.Word256{}, errors.New("Value is greater than 256 bits")
	}
	return convertToWord256(val), nil
}

func (s *stateWriter) UpdateAccount(updatedAccount account.Account) error {
	return s.stub.PutState(updatedAccount.Address().String(), updatedAccount.Code().Bytes())
}

func (s *stateWriter) RemoveAccount(address account.Address) error {
	return s.stub.DelState(address.String())
}

func (s *stateWriter) SetStorage(address account.Address, key, value binary.Word256) error {
	return s.stub.PutState(address.String(), value.Bytes())
}

func convertToWord256(value []byte) binary.Word256 {
	convertedVal := binary.Word256{}
	copy(value[:], convertedVal[:])
	return convertedVal
}

func convertToBytecode(value []byte) account.Bytecode {
	convertedVal := account.Bytecode{}
	copy(value[:], convertedVal[:])
	return convertedVal
}
