const fs = require('fs');
const path = require('path');
const hre = require("hardhat");

async function main() {
  const AmateurBlockchainDevelopersToken = await hre.ethers.getContractFactory("AmateurBlockchainDevelopersToken");
  const mnkTokenContract = await AmateurBlockchainDevelopersToken.deploy();

  await mnkTokenContract.deployed();

  console.log("mnkTokenContract deployed to:", mnkTokenContract.address);

  const content = {
    'mnkTokenContract' : mnkTokenContract.address
  }
  createAddressJson(path.join(__dirname, '/../src/address.json'),JSON.stringify(content))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function createAddressJson(path,content){
  try{
    fs.writeFileSync(path,content)
    console.log("Created Contract Address JSON")
  } catch (err) {
    console.error(err)
    return
  }
}
