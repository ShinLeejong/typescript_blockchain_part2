"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockChain_1 = require("./modules/blockChain");
let myCoin = new blockChain_1.Blockchain();
myCoin.addBlock("아 심심해");
if (myCoin.validateBlockchain())
    console.log("Validation for blockchain Completed");
//# sourceMappingURL=main.js.map