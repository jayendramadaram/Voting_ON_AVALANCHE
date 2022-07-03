// var PantherToken = artifacts.require("PantherToken");
var USN = artifacts.require("USN");
var VOTING = artifacts.require("Voting");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(USN);
  const usn = await USN.deployed();
  console.log("----------------ADDRESS--------------", usn.address);

  await deployer.deploy(VOTING, usn.address);
  const Voting = await VOTING.deployed();
  console.log("----------------ADDRESS--------------", Voting.address);

  // await PNT.transfer(lpool.address, 1000000000000000000000000000000);
};
