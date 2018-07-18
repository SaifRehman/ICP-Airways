/*
Copyright IBM Corp. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/
var Web3 = require('web3');
var user = process.env.ETHSERVER_USER
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5000'));
if (user == "User2"){
  var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:5001'));
}
web3.eth.defaultAccount = web3.eth.accounts[0];
console.log("Account: " + web3.eth.defaultAccount);

function deploy(v) {
  console.log("deploying contract...");
  var deployedContract = v.new(['a','b'], {data: votingBytecode});
  var address = web3.eth.getTransactionReceipt(deployedContract.transactionHash).ContractAddress;
  console.log("contract: " + address);
  return v.at(address);
}

var votingABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			}
		],
		"name": "delegate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "voter",
				"type": "address"
			}
		],
		"name": "giveRightToVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "proposalNames",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "proposal",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "chairperson",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "proposals",
		"outputs": [
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"name": "weight",
				"type": "uint256"
			},
			{
				"name": "voted",
				"type": "bool"
			},
			{
				"name": "delegate",
				"type": "address"
			},
			{
				"name": "vote",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "winnerName",
		"outputs": [
			{
				"name": "winnerName_",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "winningProposal",
		"outputs": [
			{
				"name": "winningProposal_",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var votingBytecode = '608060405234801561001057600080fd5b50604051610ae9380380610ae9833981018060405281019080805182019291905050506000336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600090505b81518110156101735760026040805190810160405280848481518110151561010657fe5b90602001906020020151600019168152602001600081525090806001815401808255809150509060018203906000526020600020906002020160009091929091909150600082015181600001906000191690556020820151816001015550505080806001019150506100e2565b5050610965806101846000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630121b93f14610093578063013cf08b146100c05780632e4176cf146101105780635c19a95c14610167578063609ff1bd146101aa5780639e7b8d61146101d5578063a3ec138d14610218578063e2ba53f0146102b4575b600080fd5b34801561009f57600080fd5b506100be600480360381019080803590602001909291905050506102e7565b005b3480156100cc57600080fd5b506100eb600480360381019080803590602001909291905050506103a4565b6040518083600019166000191681526020018281526020019250505060405180910390f35b34801561011c57600080fd5b506101256103d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017357600080fd5b506101a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103fc565b005b3480156101b657600080fd5b506101bf6106e6565b6040518082815260200191505060405180910390f35b3480156101e157600080fd5b50610216600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610761565b005b34801561022457600080fd5b50610259600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108ad565b60405180858152602001841515151581526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200194505050505060405180910390f35b3480156102c057600080fd5b506102c961090a565b60405180826000191660001916815260200191505060405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff1615151561034857600080fd5b60018160010160006101000a81548160ff021916908315150217905550818160020181905550806000015460028381548110151561038257fe5b9060005260206000209060020201600101600082825401925050819055505050565b6002818154811015156103b357fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002091508160010160009054906101000a900460ff1615151561045e57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561049957600080fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156105d757600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692503373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156105d257600080fd5b61049a565b60018260010160006101000a81548160ff021916908315150217905550828260010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff16156106ca578160000154600282600201548154811015156106a757fe5b9060005260206000209060020201600101600082825401925050819055506106e1565b816000015481600001600082825401925050819055505b505050565b6000806000809150600090505b60028054905081101561075c578160028281548110151561071057fe5b906000526020600020906002020160010154111561074f5760028181548110151561073757fe5b90600052602060002090600202016001015491508092505b80806001019150506106f3565b505090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614801561080a5750600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff16155b801561085857506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154145b151561086357600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b600060026109166106e6565b81548110151561092257fe5b9060005260206000209060020201600001549050905600a165627a7a723058207ca5c6d4a1fe2b34613b0a6dee770b64ddcf354501476a5b0d5d9c2c657841ee0029';

var VotingContract = web3.eth.contract(votingABI);
var myContract = null;

switch(process.argv[2]){
  case "deploy":
    myContract = deploy(VotingContract);
    console.log("Proposals")
    console.log("proposal[0]: " + myContract.proposals('0').toString());
    console.log("proposal[1]: " + myContract.proposals('1').toString());
    process.exit()
  case "giveRightToVote":
    var contractAddr = process.argv[3];
    var userAddr = process.argv[4] 
    myContract = VotingContract.at(contractAddr);
    myContract.giveRightToVote(userAddr)
    process.exit()
  case "vote":
    var address = process.argv[3];
    myContract = VotingContract.at(address);
    var proposal = process.argv[4]
    console.log("Current State: ")
    console.log("proposal[0]: " + myContract.proposals('0').toString());
    console.log("proposal[1]: " + myContract.proposals('1').toString());
    console.log("Voting for proposal: " + proposal)
    myContract.vote(proposal)
    console.log("After Voting: ")
    console.log("proposal[0]: " + myContract.proposals('0').toString());
    console.log("proposal[1]: " + myContract.proposals('1').toString());
    process.exit()
  default:
    console.log("Please specify an action: deploy, giveRightToVote, vote")
    process.exit()
}
