const Turn = require('./Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck, game) {
    this.game = game;
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return 100 - ((this.incorrectGuesses.length / this.turns) * 100)
  }

  endRound() {
    this.game.roundCounter++;
    if (this.game.roundCounter < prototypeQuestions.length) {
      console.log(`** Round ${this.game.roundCounter} is over! ** You
    answered ${this.calculatePercentCorrect().toFixed()}% of the questions
    correctly! and now round ${this.game.roundCounter + 1} starts`);
      this.game.start();
    } else {
      console.log(`** You finished the last round ** for this round You
      answered ${this.calculatePercentCorrect().toFixed()}% of the questions
      correctly!`)
    }
  }
}

module.exports = Round;


