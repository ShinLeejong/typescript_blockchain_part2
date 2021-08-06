"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_1 = require("./block");
class Blockchain {
    constructor() {
        this.getChain = () => this.blockchain;
        this.createBlock = () => new block_1.Block(0, "My name is Shin Leejong.", "");
        this.getLatestBlock = () => this.blockchain[this.blockchain.length - 1];
        this.getBlock = (i) => this.blockchain[i];
        this.pushBlock = (block) => {
            this.blockchain = [...this.blockchain, block];
        };
        this.addBlock = (data) => {
            const previousBlock = this.getLatestBlock();
            const index = previousBlock.getIndex() + 1;
            const previousHash = previousBlock.getHash();
            const block = new block_1.Block(index, data, previousHash.toString());
            this.pushBlock(block);
        };
        this.validateBlockchain = () => {
            this.blockchain.forEach((ele, idx) => {
                const previousBlock = this.getBlock(idx - 1);
                if (idx > 0) {
                    if (previousBlock.getHash() !== ele.getPreviousHash())
                        return false;
                    else if (previousBlock.getIndex() + 1 !== ele.getIndex())
                        return false;
                    else if (previousBlock.getTimestamp() > ele.getTimestamp())
                        return false;
                }
                if (ele.getHash() !== ele.calculateHash())
                    return false;
                else
                    return true;
            });
            return true;
        };
        this.blockchain = [this.createBlock()];
    }
}
exports.Blockchain = Blockchain;
//# sourceMappingURL=blockChain.js.map