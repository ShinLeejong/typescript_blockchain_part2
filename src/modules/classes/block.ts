import * as crypto from "crypto-js";
import { Transaction } from "./transaction";

export class Block {
  readonly timestamp = Date.now();
  private transactions: Transaction[];
  private hash: string;
  private previousHash: string;
  private nonce: number;

  constructor(transactions: Transaction, previousHash: string) {
    this.transactions = [transactions];
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  public getTimestamp = () => this.timestamp;
  public gettransactions = () => this.transactions;
  public getHash = () => this.hash;
  public getPreviousHash = () => this.previousHash;
  public getNonce = () => this.nonce;

  public calculateHash = (): string => {
    return crypto
      .SHA256(
        JSON.stringify(+this.transactions) +
          this.previousHash +
          this.timestamp +
          this.nonce
      )
      .toString();
  };

  public mineBlock = (difficulty: number): void => {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log("Block Mined! The Hash Value: " + this.hash);
  };
}
