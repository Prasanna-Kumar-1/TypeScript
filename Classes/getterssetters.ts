class Player6 {
  private _score: number = 0;
  constructor(public first: string, public last: string) {}

  get fullName(): string {
    return this.first + " " + this.last;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

const elton6 = new Player6("Prasanna", "Mallisetty");
//incorrect
elton6.first = "Elton"; // Error: Cannot assign to 'first' because it is a read-only property.
//incorrect
elton6.score = 100;
