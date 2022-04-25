// truffle exec script/predictAddress.js

var FactoryContract = artifacts.require("FactoryContract");
var TestContract = artifacts.require("TestContract");

module.exports = async function(callback) {
    try {
        const salt = web3.utils.sha3(Math.random().toString(16)).slice(-8);
        function getPredictedAddress(saltHex, factoryAddress, bytecode) {
            const items = [
                'ff',
                factoryAddress.slice(2),
                saltHex.slice(2).toString(),
                web3.utils.soliditySha3(bytecode).slice(2).toString()
            ]
            return `0x${web3.utils.soliditySha3(`0x${items.join('')}`).slice(-40)}`;
        }
        const saltHex = web3.eth.abi.encodeParameter('uint256', 12345);
        const factoryContract = await FactoryContract.deployed();
        const testContract = await TestContract.deployed();
        let arg = web3.eth.abi.encodeParameter("uint", 42).slice(2).toString()
        // const contractByteCode = await web3.eth.getCode(contract.address);
        const contractByteCode = `${TestContract.bytecode}${arg}`

        const predictedAddress = getPredictedAddress(saltHex, factoryContract.address, contractByteCode);
        console.log(`predictedAddress\t: \x1b[33m${predictedAddress}\x1b[0m (predicted)`);

        const result = await factoryContract.createDSalted(saltHex, 42)
        .then((result) => { return result; })
        .catch((error) => { console.error(error); callback(error); });

        const realAddress = result.receipt.logs.find(l => { return l.event == 'FactoryContractEvent' }).args.realAddress
        console.log(`realAddress\t\t: \x1b[31;1m${realAddress.toLowerCase()}\x1b[0m (real)`);

        callback();
    }
    catch (e) {
        callback(e);
    }
}
