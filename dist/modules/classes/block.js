"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto-js");
var Block = /** @class */ (function () {
    function Block(transactions, previousHash) {
        var _this = this;
        this.timestamp = Date.now();
        this.getTimestamp = function () { return _this.timestamp; };
        this.gettransactions = function () { return _this.transactions; };
        this.getHash = function () { return _this.hash; };
        this.getPreviousHash = function () { return _this.previousHash; };
        this.getNonce = function () { return _this.nonce; };
        this.calculateHash = function () {
            return crypto
                .SHA256(JSON.stringify(+_this.transactions) +
                _this.previousHash +
                _this.timestamp +
                _this.nonce)
                .toString();
        };
        this.mineBlock = function (difficulty) {
            while (_this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
                _this.nonce++;
                _this.hash = _this.calculateHash();
            }
            console.log("Block Mined! The Hash Value: " + _this.hash);
        };
        this.transactions = [transactions];
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    return Block;
}());
exports.Block = Block;
//# sourceMappingURL=block.js.map