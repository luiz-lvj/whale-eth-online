// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/ERC6551Registry.sol";
import "../src/SafeAccount.sol";
import "../src/interface/IERC6551Account.sol";
import "../src/MarFinance.sol";
import "../src/QuotaBeacon.sol";
import "../src/MockERC20.sol";

contract Deploy is Script {

    MarFinance public marFinance;



    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        address token = 0x9c00d4f278Cb6fa3c4A137F7FedfB514a7655928;

        marFinance = MarFinance(0x49EbBc5a9364F25284875A201AA39E657E90c5C6);
        marFinance.setWhiteListedToken(address(token));

        vm.stopBroadcast();
        
    }
}
