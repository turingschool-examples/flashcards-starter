class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }
  
  takeTurn(guess) {
    // if(guess === this.deck[this.turns].correctAnswer) {
    //   this.deck.shift();
    // } else {
    //   this.incorrectGuesses.push(this.deck[this.turns].id)
    // } 
    if(guess !== this.deck[this.turns].correctAnswer) {
      this.incorrectGuesses.push(this.deck[this.turns].id)
    }
    this.turns++;
  }

  calculatePercentCorrect() {
    let correct = this.deck.length - this.incorrectGuesses.length;
    let percentCorrect = (correct/this.deck.length) * 100;
    return percentCorrect
  }
}

module.exports = Round;