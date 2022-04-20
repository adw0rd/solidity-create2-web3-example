module.exports = async function(callback) {
    try {
        let accounts = await web3.eth.getAccounts()
        const C = await artifacts.require('C');
        const c = await C.deployed();
        const D = await artifacts.require('D');
        const d = await D.deployed();
        const factoryAddress = c.address;
        // const bytecode = require("../build/contracts/D.json").bytecode;
        const bytecode = web3.eth.getCode(d.address);
        const payload = web3.utils.encodePacked(bytecode, {type: 'uint', value: 1})
        const salt = 12345;
        const item = [
            '0xff',
            factoryAddress.slice(2),
            web3.eth.abi.encodeParameter('uint256', salt).slice(2).toString(),
            web3.utils.sha3(payload).slice(2).toString()
        ].join()

        const predictedAddress = "0x" + web3.utils.sha3(item).slice(-40);
        console.log("Web3 predicted:", predictedAddress);

        let addr = await c.createDSalted(1, {from: accounts[0]})
        console.log("Sol. predicted:", addr)

        callback();
    }
    catch (e) {
        callback(e);
    }
};
