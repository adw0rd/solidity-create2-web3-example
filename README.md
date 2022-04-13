An example of address prediction via `create2`:

```
truffle compile
truffle migrate
truffle exec --config=truffle-config.js scripts/predictAddress.js
```

Debugging:

```
node inspect `which truffle` exec --config=truffle-config.js scripts/predictAddress.js
```

Articles:

* [Salted contract creations / create2](https://docs.soliditylang.org/en/v0.8.13/control-structures.html#salted-contract-creations-create2)
* [Metamorphosis Smart Contracts using CREATE2](https://ethereum-blockchain-developer.com/110-upgrade-smart-contracts/12-metamorphosis-create2/)
* [Deploying Smart Contracts Using CREATE2](https://docs.openzeppelin.com/cli/2.8/deploying-with-create2)
* [Using Ethereum’s CREATE2](https://hackernoon.com/using-ethereums-create2-nw2137q7)
