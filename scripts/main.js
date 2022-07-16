const { getNamedAccounts } = require('hardhat')

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const contract = await ethers.getContract("Contract", deployer);
}

main()
  .then(() => process.exit(1))
  .catch((err) => {
    console.log(err.message);
    process.exit(0);
  });
