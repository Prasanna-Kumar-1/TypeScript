//public
class Player3 {
  public readonly first: string;
  public readonly last: string;
  public score: number = 0;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton3 = new Player3("Prasanna", "Mallisetty");
//incorrect
elton3.first = "Elton"; // Error: Cannot assign to 'first' because it is a read-only property.
