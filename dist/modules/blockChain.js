"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var block_1 = require("./block");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        var _this = this;
        this.getChain = function () { return _this.blockchain; };
        this.createBlock = function () {
            return new block_1.Block(0, "My name is Shin Leejong.", "");
        };
        this.getLatestBlock = function () {
            return _this.blockchain[_this.blockchain.length - 1];
        };
        this.getBlock = function (i) { return _this.blockchain[i]; };
        this.pushBlock = function (block) {
            _this.blockchain = __spreadArrays(_this.blockchain, [block]);
        };
        this.addBlock = function (data) {
            var previousBlock = _this.getLatestBlock();
            var index = previousBlock.getIndex() + 1;
            var previousHash = previousBlock.getHash();
            var block = new block_1.Block(index, data, previousHash.toString());
            _this.pushBlock(block);
            block.mineBlock(_this.difficulty);
        };
        this.validateBlockchain = function () {
            _this.blockchain.forEach(function (ele, idx) {
                var previousBlock = _this.getBlock(idx - 1);
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
        this.difficulty = 5;
    }
    return Blockchain;
}());
exports.Blockchain = Blockchain;
//# sourceMappingURL=blockChain.js.map