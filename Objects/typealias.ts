type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 10, y: 20 };

function randomCoordinates(): Point {
  return {
    x: Math.random(),
    y: Math.random(),
  };
}
//(function: object as parameter): object as return type
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}
