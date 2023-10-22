// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "../src/ERC6551Registry.sol";
import "../src/SafeAccount.sol";
import "../src/interface/IERC6551Account.sol";
import "../src/WhaleFinance.sol";
import "../src/QuotaBeacon.sol";
import "../src/MockERC20.sol";

contract Mint is Script {




    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        MockERC20 stablecoin = MockERC20(0xF933380D63304BBd3251dfB2478A3B184497aF4c);

        stablecoin.mint(0xD1081E9c439a495405b02DBc2410c3D13C135BEf, 2000000000 ether);

        vm.stopBroadcast();
        
    }
}
