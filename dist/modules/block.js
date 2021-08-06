"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto-js");
class Block {
    constructor(index, data, previousHash) {
        this.timestamp = Date.now();
        this.getIndex = () => this.index;
        this.getTimestamp = () => this.timestamp;
        this.getData = () => this.data;
        this.getHash = () => this.hash;
        this.getPreviousHash = () => this.previousHash;
        this.calculateHash = () => {
            return crypto
                .SHA256(+this.index +
                JSON.stringify(+this.data) +
                this.previousHash +
                this.timestamp)
                .toString();
        };
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
}
exports.Block = Block;
//# sourceMappingURL=block.js.map