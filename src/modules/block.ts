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

  constructor(index: number, data: DataType, previousHash: string) {
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  public getIndex = () => this.index;
  public getTimestamp = () => this.timestamp;
  public getData = () => this.data;
  public getHash = () => this.hash;
  public getPreviousHash = () => this.previousHash;

  public calculateHash = (): string => {
    return crypto
      .SHA256(
        +this.index +
          JSON.stringify(+this.data) +
          this.previousHash +
          this.timestamp
      )
      .toString();
  };
}
