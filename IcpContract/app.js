
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


// var callData=contract.methods.get()
// console.log(callData)
contract.methods.set('saif').call().then(function(res){
    console.log('aaaaa',res);
}).catch(function(err) {
    console.log(err);
});
// contract.methods.get().call().then(function(res){
//     console.log(res);
// }).catch(function(err) {
//     console.log(err);
// });
// var Web3 = require('web3'); //need web3 1.0
// var fs = require('fs'); //need web3 1.0

// var web3 = new Web3(new Web3.providers.HttpProvider('http://169.61.62.89:30001'));
// var accounts;
// web3.eth.getAccounts().then((acc) => accounts = acc);

// //Compile contracts with solc, the solidity compiler
// var solc = require('solc');
// var contractSrc = fs.readFileSync('./contracts/IcpContract.sol').toString();
// var contractCom = solc.compile(contractSrc);

// //Create contract object
// var abi = JSON.parse(contractCom.contracts[':IcpContract'].interface);
// var HelloWorld = new web3.eth.Contract(abi);

// //Build transaction object;
// var bytecode = contractCom.contracts[':IcpContract'].bytecode;
// var argHex = web3.utils.asciiToHex("hey"); //Needed because our contract constructor needs a bytes32 type
// var deployContractTx = HelloWorld.deploy({data: bytecode, arguments: [argHex]});



// var callData=democontract.returnValue.call();
// console.log(callData); 
// //Deploy to the network
// // var contractInstance;
// // deployContractTx.send({from: '0xd5335aee753f741c35a4ea5eb59dd4937827d8a9', gas: 1000000}).then((instance) => contractInstance = instance);

// // //Call a method
// // contractInstance.methods.get().call().then((result) => console.log(web3.utils.hexToAscii(result)));