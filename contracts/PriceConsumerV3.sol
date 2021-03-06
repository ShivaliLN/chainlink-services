// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    int public priceAtDeploy;
    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() public {
        priceFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
        priceAtDeploy = getLatestPrice();
        
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }

    function priceChanged() external view returns(int){
    // if the price has gone down, return -1
    // if the price has not changed return 0
    // if the price has gone up return 1
        int currentPrice = getLatestPrice();
        if(currentPrice > priceAtDeploy){
            return 1;
            } else if(currentPrice < priceAtDeploy) {
                return -1;
        }
            return 0;
        }    
}
