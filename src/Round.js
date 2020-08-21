const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.currentCard = this.deck.cardsInDeck[0];
    this.incorrectGuesses = [];
    this.correct = true;
    }
    
  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard);
    this.turnCount++;
    if (newTurn.evaluateGuess()) {
      this.deck.cardsInDeck.shift();
      this.currentCard = this.deck.cardsInDeck[0];
      return newTurn.giveFeedback()
    } else {
      this.correct = false
      this.incorrectGuesses.push(this.deck.cardsInDeck[0].id)
      return newTurn.giveFeedback()
    }
  }

  calculatePercentCorrect() {
  }

  endRound() {
    if (this.correct) {
      console.log('**Round over!** You answered (tbd)% of the questions correctly!')
    }

  }

}

//currentCARD





module.exports = Round
