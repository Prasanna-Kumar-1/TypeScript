//exercise 1
let highScore: number | boolean;

//exercise 2 : create an arry called stuff. It can be an arry of numbers or an array of strings. It cannot be an array of numbers and strings
let staff: string[] | number[] = [];

//exerrise 3: create a literal type called "SkillLevel". There are 4 allowed values: "Beginner", "Intermediate", "Advanced", "Expert"
let SkillLevel: "Beginner" | "Intermediate" | "Advanced" | "Expert" =
  "Beginner";

//exercise 4: create a type called SkiSchoolStudent. It should have the following properties:
// (1) name must be a string, (2) age must be a number, (3) sport must be either "ski" or "snowboard", (4) level must be of type SkillLevel
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

//exercise 5: Define a type to represent an RGB color. It should have three properties: r, g, and b, each of which should be a number
//Define a type to represent an HSL color. It should have three properties: h, s, and l, each of which should be a number
//CREATE an array called colors that can hold mixture of RGB and HSL color types.

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

let colors: (RGB | HSL)[] = [];
