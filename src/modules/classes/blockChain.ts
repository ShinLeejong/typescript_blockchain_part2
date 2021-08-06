import { Block } from "./block";
import { Transaction } from "./transaction";

export class Blockchain {
  private blockchain: Block[];
  private difficulty: number;
  private pendingTransactions: Transaction[];
  private miningReward: number;

  constructor() {
    this.blockchain = [this.createBlock()];
    this.difficulty = 4;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  public getChain = (): Block[] => this.blockchain;

  public createBlock = (): Block =>
    new Block(new Transaction(null, null, 0), "");

  public getLatestBlock = (): Block =>
    this.blockchain[this.blockchain.length - 1];

  public getBlock = (i: number): Block => this.blockchain[i];

  public pushBlock = (block: Block): void => {
    this.blockchain = [...this.blockchain, block];
  };

  public addBlock = (transaction: Transaction): void => {
    const previousHash = this.getLatestBlock().getHash();
    const block = new Block(transaction, previousHash.toString());
    this.pushBlock(block);
    block.mineBlock(this.difficulty);
  };

  public minePendingTransactions = (address: string): void => {
    this.addBlock(new Transaction("", address, 5_000_000));
    console.log("Block is mined!");
    this.pendingTransactions = [
      ...this.pendingTransactions,
      new Transaction(null, address, this.miningReward),
    ];
  };

  public createTransaction = (transaction: Transaction) => {
    this.pendingTransactions = [...this.pendingTransactions, transaction];
  };

  public getBalanceOfAddress = (address: string): number => {
    let balance = 0;
    for (const block of this.blockchain) {
      for (const transaction of block.gettransactions()) {
        if (transaction.getFrom() === address)
          balance -= transaction.getAmount();
        if (transaction.getTo() === address) balance += transaction.getAmount();
      }
    }
    return balance;
  };

  public validateBlockchain = (): boolean => {
    this.blockchain.forEach((ele, idx) => {
      const previousBlock = this.getBlock(idx - 1);
      if (idx > 0) {
        if (previousBlock.getHash() !== ele.getPreviousHash()) return false;
        else if (previousBlock.getTimestamp() > ele.getTimestamp())
          return false;
      }
      if (ele.getHash() !== ele.calculateHash()) return false;
      else return true;
    });
    return true;
  };
}
