const Turn = require('../src/Turn');

class Round{
  constructor(inputDeck, inputUserGuess){
      this.deck = inputDeck;
      this.turns = 0;
      this.incorrectGuesses = [];
  }
  returnCurrentCard(){
    return this.deck[0];
  }
  takeTurn(inputUserGuess){
    this.userGuess = inputUserGuess;
    this.turns += 1;
    let newTurn = new Turn(this.userGuess, this.deck.cards[0])
    newTurn.evaluateGuess()
        if (newTurn.userIsCorrect === false) {
      this.incorrectGuesses.push(this.deck.cards[0].correctAnswer);
    }
    this.deck.cards.shift();
    return newTurn.giveFeedback()
  }
  calculatePercentCorrect(){
    return (this.incorrectGuesses.length/this.turns);
  }
}

module.exports = Round;
