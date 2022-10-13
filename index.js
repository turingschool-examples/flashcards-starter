const data = require("./src/data")
const Game = require("./src/Game")

// This is where your project starts.
const newGame = new Game(data.prototypeData)
newGame.start()
console.log('Your project is running...')
