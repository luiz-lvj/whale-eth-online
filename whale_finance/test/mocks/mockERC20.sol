// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MockERC20 is ERC20 {
    constructor() ERC20("MOCK", "MOCK"){

    }

    function mint(address _to, uint256 _amount) public {
        _mint(_to, _amount);
    }

}