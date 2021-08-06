"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elliptic = require("elliptic");
var ec = elliptic.ec;
exports.el = new ec("secp256k1");
var key = exports.el.genKeyPair();
var publicKey = key.getPublic("hex");
var privateKey = key.getPrivate("hex");
console.log("Private key: ", privateKey);
console.log("Public key: ", publicKey);
//# sourceMappingURL=keyGenerator.js.map