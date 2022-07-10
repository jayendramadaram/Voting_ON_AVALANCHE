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

// https://testnet.snowtrace.io/address/0x1958CbE28A9B44f50C027D2846db783768718630#readContract
// https://testnet.snowtrace.io/address/0x95Ab024c88c42f284132957Eade37f158B386517#readContract
