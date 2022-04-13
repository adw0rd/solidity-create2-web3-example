const Contract = artifacts.require("D");

module.exports = function (deployer) {
    deployer.deploy(Contract, 42);
};
