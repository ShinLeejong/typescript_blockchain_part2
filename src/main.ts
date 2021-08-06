import { Blockchain } from "./modules/classes/blockChain";
import { Transaction } from "./modules/classes/transaction";

let myCoin = new Blockchain();

if (myCoin.validateBlockchain())
  console.log("Validation for blockchain Completed");

console.log("Mining Block...");
myCoin.addBlock(new Transaction("Lee", "Guri", 1_000_000));

myCoin.createTransaction(new Transaction("Guri", "Lee", 3_000_000));
myCoin.createTransaction(new Transaction("Lee", "Guri", 4_000_000));

console.log("Start Mining!");
myCoin.minePendingTransactions("Guri");

console.log(`The balance of Guri is ${myCoin.getBalanceOfAddress("Guri")}.`);
