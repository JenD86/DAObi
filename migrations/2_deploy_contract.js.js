// migrations/2_deploy_box.js
var DAObiContract = artifacts.require("DAObiContract");

module.exports = function(deployer){
  deployer.deploy(DAObiContract);
}