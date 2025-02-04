class Player {
  first: string;
  last: string;
  score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton = new Player("Prasanna", "Mallisetty");
//correct
elton.score = 100;
//incorrect
elton.score = "100"; // Error: Type 'string' is not assignable to type 'number'.
