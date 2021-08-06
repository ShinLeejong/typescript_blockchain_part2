"use strict";
exports.__esModule = true;
var crypto = require("crypto-js");
var Block = /** @class */ (function () {
    function Block(index, data, previousHash) {
        var _this = this;
        this.timestamp = Date.now();
        this.getIndex = function () { return _this.index; };
        this.getTimestamp = function () { return _this.timestamp; };
        this.getData = function () { return _this.data; };
        this.getHash = function () { return _this.hash; };
        this.getPreviousHash = function () { return _this.previousHash; };
        this.getNonce = function () { return _this.nonce; };
        this.calculateHash = function () {
            return crypto
                .SHA256(+_this.index +
                JSON.stringify(+_this.data) +
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
            console.log(_this.index + " of Block Mined! The Hash Value: " + _this.hash);
        };
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    return Block;
}());
exports.Block = Block;
//# sourceMappingURL=block.js.map