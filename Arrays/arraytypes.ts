//array of strings
const activeUsers: string[] = [];
//correct
activeUsers.push("Prasanna");
//incorrect
activeUsers.push(12);

//array of numbers;
const ageList: number[] = [45, 23, 12, 67, 89];
//correct
ageList[0] = 34;
//incorrect
ageList[1] = "Prasanna";

//Alternative way
const bools: array<boolean> = [];
bools.push(true);
bools.push(false);

//custom type
type Point = { x: number; y: number };

const coordinates: Point[] = [];
//correct
coordinates.push({ x: 12, y: 23 });
//incorrect
coordinates.push({ x: "Prasanna", y: "Kumar" });
