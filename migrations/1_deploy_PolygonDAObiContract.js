const DAObiContract = artifacts.require("DAObiContract");

module.exports = function (deployer) {
  deployer.deployProxy(DAObiContract, { kind: 'uups' });
};
