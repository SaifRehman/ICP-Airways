var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};




const Web3 = require('web3');

const TruffleConfig = require('../truffle');

var Migrations = artifacts.require("./Migrations.sol");


module.exports = function(deployer, network, addresses) {
  const config = TruffleConfig.networks[network];

  if (1) {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://' + '169.61.62.89'+ ':' + '30001'));

    web3.eth.personal.unlockAccount('0xd5335aee753f741c35a4ea5eb59dd4937827d8a9','.7475443aA!', 36000);
  }

  console.log('>> Deploying migration');
  deployer.deploy(Migrations);
};