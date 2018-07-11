var IcpContract = artifacts.require("IcpContract")

module.exports = function(deployer) {
  deployer.deploy(IcpContract)
}