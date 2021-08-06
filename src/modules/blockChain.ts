import { Block, DataType } from "./block";

export class Blockchain {
  private blockchain: Block[];

  constructor() {
    this.blockchain = [this.createBlock()];
  }

  public getChain = (): Block[] => this.blockchain;

  public createBlock = (): Block =>
    new Block(0, "My name is Shin Leejong.", "");

  public getLatestBlock = (): Block =>
    this.blockchain[this.blockchain.length - 1];

  public getBlock = (i: number): Block => this.blockchain[i];

  public pushBlock = (block: Block): void => {
    this.blockchain = [...this.blockchain, block];
  };

  public addBlock = (data: DataType): void => {
    const previousBlock = this.getLatestBlock();
    const index = previousBlock.getIndex() + 1;
    const previousHash = previousBlock.getHash();
    const block = new Block(index, data, previousHash.toString());
    this.pushBlock(block);
  };

  public validateBlockchain = (): boolean => {
    this.blockchain.forEach((ele, idx) => {
      const previousBlock = this.getBlock(idx - 1);
      if (idx > 0) {
        if (previousBlock.getHash() !== ele.getPreviousHash()) return false;
        else if (previousBlock.getIndex() + 1 !== ele.getIndex()) return false;
        else if (previousBlock.getTimestamp() > ele.getTimestamp())
          return false;
      }
      if (ele.getHash() !== ele.calculateHash()) return false;
      else return true;
    });
    return true;
  };
}
