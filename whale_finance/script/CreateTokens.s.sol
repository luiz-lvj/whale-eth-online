// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/MockERC20.sol";

contract Create is Script {
    MockERC20 public zusd;
    MockERC20 public weth;


    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        zusd = new MockERC20("WETH", "WETH");
        zusd.mint(0xD1081E9c439a495405b02DBc2410c3D13C135BEf, 100000000 ether);


        console.log("ZUSD address: %s", address(zusd));

        vm.stopBroadcast();
        
    }
}