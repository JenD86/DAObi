// migrations/MM_upgrade_box_contract.js
const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const DAObiContract = artifacts.require('DAObiContract');
const DAObiContractV2 = artifacts.require('DAObiContractV2');

module.exports = async function (deployer) {
  const instance = await upgradeProxy('0x...', DAObiContractV2, { deployer, kind: 'uups' });
  console.log("Upgraded", instance.address);
};