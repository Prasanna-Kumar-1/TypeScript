class Player1 {
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
    console.log("Within constructor");
  }
  taunt() {
    console.log("Player taunts");
  }
  numOLives() {
    this.numLives -= 1;
  }
}

const player1 = new Player("Prasanna", "Mallisetty");
player1.taunt(); // Player taunts
console.log(player1); // Player {}

const player2 = new Player();
player2.taunt(); // Player taunts
