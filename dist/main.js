"use strict";
exports.__esModule = true;
var blockChain_1 = require("./modules/blockChain");
var myCoin = new blockChain_1.Blockchain();
if (myCoin.validateBlockchain())
    console.log("Validation for blockchain Completed");
console.log("Mining Block...");
myCoin.addBlock("아 심심해");
//# sourceMappingURL=main.js.map