const Contract = artifacts.require("C");

module.exports = function (deployer) {
  deployer.deploy(Contract);
};
