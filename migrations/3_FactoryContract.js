const Contract = artifacts.require("FactoryContract");

module.exports = function (deployer) {
  deployer.deploy(Contract);
};
