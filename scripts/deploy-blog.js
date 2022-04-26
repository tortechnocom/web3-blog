/* scripts/deploy.js */
const hre = require("hardhat");
const fs = require('fs');

async function main() {
  /* these two lines deploy the contract to the network */
  // const Blog = await hre.ethers.getContractFactory("Blog");
  // const blog = await Blog.deploy("My blog");
  // await blog.deployed();
  // console.log("Blog deployed to:", blog.address);

  // Verify
  await hre.run("verify:verify", {
    contract: "contracts/Blog.sol:Blog",
    address: "0x1d156954c97299881f7a2ca9982c3c28503beb9a",
    constructorArguments: ["My blog"],
  });


  /* this code writes the contract addresses to a local */
  /* file named config.js that we can use in the app */
  // fs.writeFileSync('./config.js', `
  // export const contractAddress = "${blog.address}"
  // export const ownerAddress = "${blog.signer.address}"
  // `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
