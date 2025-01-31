function printName(person: { firstName: string; lastName: string }): void {
  console.log(person.firstName + " " + person.lastName);
}
//incorrect
printName({
  firstName: "Elton",
});
//incorrect
printName({
  firstName: "Elton",
  lastName: 9,
});
//correct
printName({
  firstName: "Elton",
  lastName: "John",
});
//function with return type as object literal

function randomCoordinates(): { x: number; y: number } {
  return {
    x: Math.random(),
    y: Math.random(),
  };
}
