//incorrect
type Point = {
  x: number;
  y: number;
  z: number; //no question mark
};

const myPoint1: Point = { x: 10, y: 20 };

type Point = {
  x: number;
  y: number;
  z?: number; //question mark makes it optional
};

const myPoint2: Point = { x: 10, y: 20 };
