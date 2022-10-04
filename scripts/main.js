const { getNamedAccounts, ethers } = require('hardhat');

const main = async () => {
  const { deployer } = await getNamedAccounts();
  const contract = await ethers.getContract('Contract', deployer);
  const age = await contract.getAge();
  console.log('Contract deployed. Age is ', age.toString());
};

main()
  .then(() => process.exit(1))
  .catch((err) => {
    console.log(err.message);
    process.exit(0);
  });
