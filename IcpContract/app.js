
const fs = require("fs")
Web3 = require('web3')

var abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "value",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]


let provider = new Web3.providers.HttpProvider("http://169.61.62.89:30001");
const web3 = new Web3(provider);
const contract = new web3.eth.Contract(abi,"0x03a8cad9c7a5969b7382459c6f5fb2808fe3f178");

contract.methods.set("[]").send({
    from: '0xd5335aee753f741c35a4ea5eb59dd4937827d8a9',
    gas: '1000000'
});

// contract.methods.get().call().then(function(res){
//     console.log(res);
// }).catch(function(err) {
//     console.log(err);
// });
