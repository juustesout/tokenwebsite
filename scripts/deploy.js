const hre = require("hardhat");

async function main() {
  const funToken = await hre.ethers.deployContract("FunToken");

  await funToken.waitForDeployment();

  console.log(`contract deployed to ${funToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
