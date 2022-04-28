An example of address prediction via `create2`:

```
$ truffle deploy --reset
$ truffle exec scripts/predictAddress.js

predictedAddress	: 0x0e0ba11898ebef07da013152ec9858038a0995e5 (predicted)
realAddress		: 0x0e0ba11898ebef07da013152ec9858038a0995e5 (real)
```

Debugging:

add `debugger;` anywhere in the script `scripts/predictAddress.js` and run this:

```
node inspect `which truffle` exec scripts/predictAddress.js
```

Articles:

* [Salted contract creations / create2](https://docs.soliditylang.org/en/v0.8.13/control-structures.html#salted-contract-creations-create2)
* [Metamorphosis Smart Contracts using CREATE2](https://ethereum-blockchain-developer.com/110-upgrade-smart-contracts/12-metamorphosis-create2/)
* [Deploying Smart Contracts Using CREATE2](https://docs.openzeppelin.com/cli/2.8/deploying-with-create2)
* [Using Ethereum’s CREATE2](https://hackernoon.com/using-ethereums-create2-nw2137q7)
* [Getting the most out of CREATE2](https://blog.openzeppelin.com/getting-the-most-out-of-create2/)
