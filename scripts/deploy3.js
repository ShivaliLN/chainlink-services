const hre = require("hardhat");

async function main() {
  const accounts = await ethers.provider.listAccounts();
  const RequestRainfall = await ethers.getContractFactory("RequestRainfall");
  const requestRainfall = await RequestRainfall.deploy();

  await requestRainfall.deployed();

  console.log("RequestRainfall deployed to:", requestRainfall.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
