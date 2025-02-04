//public
class Player5 {
  private score: number = 0;
  constructor(public first: string, public last: string) {}
}

const elton5 = new Player5("Prasanna", "Mallisetty");
//incorrect
elton5.first = "Elton"; // Error: Cannot assign to 'first' because it is a read-only property.
//incorrect
elton5.score = 100;
