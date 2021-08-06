"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = /** @class */ (function () {
    function Transaction(from, to, amount) {
        var _this = this;
        this.setFrom = function (from) {
            _this.from = from;
        };
        this.setTo = function (to) {
            _this.to = to;
        };
        this.setAmount = function (amount) {
            _this.amount = amount;
        };
        this.getFrom = function () { return _this.from; };
        this.getTo = function () { return _this.to; };
        this.getAmount = function () { return _this.amount; };
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map