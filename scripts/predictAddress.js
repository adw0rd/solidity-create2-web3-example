const ethers = require('ethers');

module.exports = async function(callback) {
    try {
        const Contract = await artifacts.require('D');
        const contract = await Contract.deployed();
        const factoryAddress = "0xDf72dae1bB5f5F81E8dC750e01551530e4d6DD1C";
        const bytecode = require("../build/contracts/D.json").bytecode;
        const salt = 12345;
        // let item = ethers.utils.solidityKeccak256(ethers.utils.solidityPack(bytecode));
        // let addr = uint160(ethers.utils.solidityKeccak256(ethers.utils.solidityPack(
        //     0xff, address, salt, item
        // )));
        const item = [
            '0xff',
            factoryAddress.slice(2),
            web3.eth.abi.encodeParameter('uint256', salt).slice(2).toString(),
            web3.utils.sha3(bytecode).slice(2).toString()
        ].join()
        const predictedAddress = "0x" + web3.utils.sha3(item).slice(-40);
        console.log("predictedAddress: ", predictedAddress);
        callback();
    }
    catch (e) {
        callback(e);
    }
};
