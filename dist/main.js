"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blockChain_1 = require("./modules/classes/blockChain");
var transaction_1 = require("./modules/classes/transaction");
var myCoin = new blockChain_1.Blockchain();
if (myCoin.validateBlockchain())
    console.log("Validation for blockchain Completed");
console.log("Mining Block...");
myCoin.addBlock(new transaction_1.Transaction("Lee", "Guri", 1000000));
myCoin.createTransaction(new transaction_1.Transaction("Guri", "Lee", 3000000));
myCoin.createTransaction(new transaction_1.Transaction("Lee", "Guri", 4000000));
console.log("Start Mining!");
myCoin.minePendingTransactions("Guri");
console.log("The balance of Guri is " + myCoin.getBalanceOfAddress("Guri") + ".");
//# sourceMappingURL=main.js.map