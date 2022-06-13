// Create a keypair so all clients access same account
// Run this once, then access ./keypair.json file

const fs = require('fs');
const anchor = require("@project-serum/anchor");

const account = anchor.web3.Keypair.generate();

fs.writeFileSync('./keypair.json', JSON.stringify(account));
