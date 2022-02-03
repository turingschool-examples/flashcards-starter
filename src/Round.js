const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck.cards[this.turns])
    currentTurn.evaluateGuess()
    this.turns++
    if (currentTurn.isCorrect) {
      currentTurn.currentCard = this.deck.cards[this.turns]
      return currentTurn.giveFeedback()
    } else {
      this.incorrectGuesses.push(currentTurn.currentCard.id)
      currentTurn.currentCard = this.deck.cards[this.turns]
      return currentTurn.giveFeedback()
    }
  }
  calculatePercentCorrect() {
    return Math.floor(100 * (1 - this.incorrectGuesses.length / this.turns))
  }

  endRound() {
    if (this.calculatePercentCorrect() > 89) {
      console.log(
        `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!
        Since you answered over 90% correct, you get a treat: (you may need to resize your terminal)

 \/$$     \/$$                                                                  \/$$                               \/$$\r\n|  $$   \/$$\/                                                                 | $$                              | $$\r\n \\  $$ \/$$\/\/$$$$$$  \/$$   \/$$        \/$$$$$$   \/$$$$$$   \/$$$$$$         \/$$$$$$$  \/$$$$$$   \/$$$$$$   \/$$$$$$ | $$\r\n  \\  $$$$\/\/$$__  $$| $$  | $$       |____  $$ \/$$__  $$ \/$$__  $$       \/$$__  $$ \/$$__  $$ \/$$__  $$ \/$$__  $$| $$\r\n   \\  $$\/| $$  \\ $$| $$  | $$        \/$$$$$$$| $$  \\__\/| $$$$$$$$      | $$  | $$| $$  \\ $$| $$  \\ $$| $$$$$$$$|__\/\r\n    | $$ | $$  | $$| $$  | $$       \/$$__  $$| $$      | $$_____\/      | $$  | $$| $$  | $$| $$  | $$| $$_____\/    \r\n    | $$ |  $$$$$$\/|  $$$$$$\/      |  $$$$$$$| $$      |  $$$$$$$      |  $$$$$$$|  $$$$$$\/| $$$$$$$\/|  $$$$$$$ \/$$\r\n    |__\/  \\______\/  \\______\/        \\_______\/|__\/       \\_______\/       \\_______\/ \\______\/ | $$____\/  \\_______\/|__\/\r\n                                                                                           | $$                    \r\n                                                                                           | $$                    \r\n                                                                                           |__\/                    `
      )
    } else {
      console.log(`
      ** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!
      Let's pump those numbers up, those are rookie numbers! 
      Go again!`)
    }
  }
}

module.exports = Round
