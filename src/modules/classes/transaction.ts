export class Transaction {
  private from: string | null;
  private to: string | null;
  private amount: number;
  constructor(from, to, amount) {
    this.from = from;
    this.to = to;
    this.amount = amount;
  }

  public setFrom = (from: string): void => {
    this.from = from;
  };
  public setTo = (to: string): void => {
    this.to = to;
  };
  public setAmount = (amount: number): void => {
    this.amount = amount;
  };

  public getFrom = (): string => this.from;
  public getTo = (): string => this.to;
  public getAmount = (): number => this.amount;
}
