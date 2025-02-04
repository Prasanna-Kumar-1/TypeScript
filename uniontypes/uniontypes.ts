let age: number | string = 21;
age = "21";
age = 21;

type Point = { x: number; y: number };
type Loc = { lat: number; lng: number };

let coordinates: Point | Loc = { x: 10, y: 20 };
console.log(coordinates);

coordinates = { lat: 10, lng: 20 };
