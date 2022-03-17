const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const DAObiContract = artifacts.require("DAObiContract");

module.exports = async function (deployer) {
  await deployProxy(DAObiContract, { deployer});
};