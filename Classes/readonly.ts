class Player2 {
  readonly first: string;
  readonly last: string;
  score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton2 = new Player2("Prasanna", "Mallisetty");
//incorrect
elton2.first = "Elton"; // Error: Cannot assign to 'first' because it is a read-only property.
