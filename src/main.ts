import { Blockchain } from "./modules/blockChain";

let myCoin = new Blockchain();

if (myCoin.validateBlockchain())
  console.log("Validation for blockchain Completed");

console.log("Mining Block...");
myCoin.addBlock("아 심심해");
