// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";

error Contract__UpkeepNotNeeded();

contract Contract is KeeperCompatible {
    uint256 private s_lastTimeStamp;
    uint256 private immutable i_interval;

    constructor(uint256 interval) {
        s_lastTimeStamp = block.timestamp;
        i_interval = interval;
    }

    function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
        return upkeepNeeded;
    }

    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        (bool upkeepNeeded, ) = checkUpkeep("");
        if (!upkeepNeeded) revert Contract__UpkeepNotNeeded();
        // Do something
    }
}
