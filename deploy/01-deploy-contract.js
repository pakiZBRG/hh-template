const { network } = require('hardhat');
const { developmentChains } = require('../helper-hardhat-config');
const verify = require('../utils/verify');

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const contract = await deploy('SmartContract', {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (
    !developmentChains.includes(network.name)
    && process.env.ETHERSCAN_API_KEY
  ) {
    await verify(contract.address, []);
  }
  log('\n');
};

module.exports.tags = ['all', 'contracts'];
