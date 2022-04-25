const Contract = artifacts.require("TestContract");

module.exports = function (deployer) {
    deployer.deploy(Contract, 42);
};
