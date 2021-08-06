import { Blockchain } from "./modules/blockChain";

let myCoin = new Blockchain();

myCoin.addBlock("아 심심해");

if (myCoin.validateBlockchain())
  console.log("Validation for blockchain Completed");
