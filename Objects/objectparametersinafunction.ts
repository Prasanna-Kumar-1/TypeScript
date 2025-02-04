function printName(person: { firstName: string; lastName: string }): void {
  console.log(person.firstName + " " + person.lastName);
}
//incorrect
printName({ firstName: "Elton", lastName: "John", age: 73 });
//correct
const singer = { firstName: "Elton", lastName: "John", age: 73, isAlive: true };
printName(singer);
