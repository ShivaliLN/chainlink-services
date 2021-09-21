const hre = require("hardhat");

async function main() {
  const accounts = await ethers.provider.listAccounts();
  const RandomNumberConsumer = await ethers.getContractFactory("RandomNumberConsumer");
  const randomNumberConsumer = await RandomNumberConsumer.deploy();

  await randomNumberConsumer.deployed();

  console.log("RandomNumberConsumer deployed to:", randomNumberConsumer.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
