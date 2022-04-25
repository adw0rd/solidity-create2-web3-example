// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./TestContract.sol";

contract FactoryContract {
    event FactoryContractEvent(address realAddress);
    function createDSalted(bytes32 salt, uint arg) public returns(address) {
        // This complicated expression just tells you how the address
        // can be pre-computed. It is just there for illustration.
        // You actually only need ``new D{salt: salt}(arg)``.
        address predictedAddress = address(uint160(uint(keccak256(abi.encodePacked(
            bytes1(0xff),
            address(this),
            salt,
            keccak256(abi.encodePacked(type(TestContract).creationCode, arg))
        )))));
        TestContract instance = new TestContract{salt: salt}(arg);
        address realAddress = address(instance);
        require(realAddress == predictedAddress);
        emit FactoryContractEvent(realAddress);
        return realAddress;
    }
}
