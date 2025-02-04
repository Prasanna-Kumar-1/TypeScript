//public
class Player4 {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton4 = new Player4("Prasanna", "Mallisetty");
//incorrect
elton4.first = "Elton"; // Error: Cannot assign to 'first' because it is a read-only property.
//incorrect
elton4.score = 100; // Error: Property 'score' is private and only accessible within class 'Player4'.
