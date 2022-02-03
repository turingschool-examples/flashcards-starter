// This is where your project starts.
const Game = require('./src/Game')

const game = new Game()

const playGame = () => {
  game.start()
}

playGame()

