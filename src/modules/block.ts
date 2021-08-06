import * as crypto from "crypto-js";

export type DataType =
  | number
  | string
  | string[]
  | Record<number | string, number | string>;

export class Block {
  private index: number;
  readonly timestamp = Date.now();
  private data: DataType;
  private hash: string;
  private previousHash: string;
  private nonce: number;

  constructor(index: number, data: DataType, previousHash: string) {
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  public getIndex = () => this.index;
  public getTimestamp = () => this.timestamp;
  public getData = () => this.data;
  public getHash = () => this.hash;
  public getPreviousHash = () => this.previousHash;
  public getNonce = () => this.nonce;

  public calculateHash = (): string => {
    return crypto
      .SHA256(
        +this.index +
          JSON.stringify(+this.data) +
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
    console.log(this.index + " of Block Mined! The Hash Value: " + this.hash);
  };
}
