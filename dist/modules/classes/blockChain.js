"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var block_1 = require("./block");
var transaction_1 = require("./transaction");
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        var _this = this;
        this.getChain = function () { return _this.blockchain; };
        this.createBlock = function () {
            return new block_1.Block(new transaction_1.Transaction(null, null, 0), "");
        };
        this.getLatestBlock = function () {
            return _this.blockchain[_this.blockchain.length - 1];
        };
        this.getBlock = function (i) { return _this.blockchain[i]; };
        this.pushBlock = function (block) {
            _this.blockchain = __spreadArrays(_this.blockchain, [block]);
        };
        this.addBlock = function (transaction) {
            var previousHash = _this.getLatestBlock().getHash();
            var block = new block_1.Block(transaction, previousHash.toString());
            _this.pushBlock(block);
            block.mineBlock(_this.difficulty);
        };
        this.minePendingTransactions = function (address) {
            _this.addBlock(new transaction_1.Transaction("", address, 5000000));
            console.log("Block is mined!");
            _this.pendingTransactions = __spreadArrays(_this.pendingTransactions, [
                new transaction_1.Transaction(null, address, _this.miningReward),
            ]);
        };
        this.createTransaction = function (transaction) {
            _this.pendingTransactions = __spreadArrays(_this.pendingTransactions, [transaction]);
        };
        this.getBalanceOfAddress = function (address) {
            var balance = 0;
            for (var _i = 0, _a = _this.blockchain; _i < _a.length; _i++) {
                var block = _a[_i];
                for (var _b = 0, _c = block.gettransactions(); _b < _c.length; _b++) {
                    var transaction = _c[_b];
                    if (transaction.getFrom() === address)
                        balance -= transaction.getAmount();
                    if (transaction.getTo() === address)
                        balance += transaction.getAmount();
                }
            }
            return balance;
        };
        this.validateBlockchain = function () {
            _this.blockchain.forEach(function (ele, idx) {
                var previousBlock = _this.getBlock(idx - 1);
                if (idx > 0) {
                    if (previousBlock.getHash() !== ele.getPreviousHash())
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
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }
    return Blockchain;
}());
exports.Blockchain = Blockchain;
//# sourceMappingURL=blockChain.js.map