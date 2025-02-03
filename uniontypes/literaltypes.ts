let zero: 0 = 0;
//correct
let hi1: "hi" = "hi";
//incorrect
let hi2: hi = "Hi";

let mood: "Happy" | "Sad" = "Happy";
//correct
mood = "Sad";
mood = "Happy";
//incorrect
mood = "Angry";
