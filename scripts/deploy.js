const hre = require("hardhat");

async function main() {
  const accounts = await ethers.provider.listAccounts();
  const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
  const priceConsumerV3 = await PriceConsumerV3.deploy();

  await priceConsumerV3.deployed();

  console.log("PriceConsumerV3 deployed to:", priceConsumerV3.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
