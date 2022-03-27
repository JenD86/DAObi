const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const DAObiContract = artifacts.require("DAObiContract");

module.exports = async function (deployer) {
  const instance = await deployProxy(DAObiContract, { deployer, kind: 'uups' });
  console.log('Deployed', instance.address);
};