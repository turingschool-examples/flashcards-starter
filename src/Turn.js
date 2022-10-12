class Turn {
  constructor(guess, currentCard) {
    this.guess = guess
    this.card = currentCard
  }
  returnGuess = () => {
    return this.guess
  }
  returnCard = () => {
    return this.card
  }
  evaluateGuess = () => {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
  }
  giveFeedback = () => {
    let guess = this.evaluateGuess()
    if (guess === true) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}

const card1 = new Card(1, 'What is the capital of Oklahoma?', ['Tulsa', 'Oklahoma City', 'Norman'], 'Oklahoma City')
const turn1 = new Turn('Oklahoma City', card1)

const card2 = new Card(1, 'What is the capital of Texas?', ['Houston', 'Dallas', 'Austin'], 'Austin')
const turn2 = new Turn('Houston', card2)

module.exports = Turn