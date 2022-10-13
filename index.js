const data = require("./src/data")
const Game = require("./src/Game")

const newGame = new Game(data.prototypeData)
newGame.start()
console.log('Your project is running...')
