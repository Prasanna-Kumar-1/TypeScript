class Player {
  static description = "Player In Our Game"; //existed in class level and not in instance level
//correct
console.log(Player.description); //Player In Our Game
//incorrect
console.log(new Player().description); //undefined



static randomPlayer() {
    new Player("Prasanna", "Mallisetty");
  }
}
//correct
Player.randomPlayer(); //Player In Our Game
//incorrect
new Player().randomPlayer(); //TypeError: (intermediate value).randomPlayer is not a function