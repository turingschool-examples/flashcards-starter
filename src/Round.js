class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectAnswers = [];
  }

  returnCurrentCard = () => {
    return this.deck.cards[this.turns];
  }

  takeTurn = (guess) => {
    if(guess !== this.deck.cards[this.turns].correctAnswer) {
      this.incorrectAnswers.push(this.deck.cards[this.turns].id)
      this.turns++;
      return 'incorrect!';
    } else {
      this.turns++;
      return 'correct!';
    };
  }

  calculatePercentCorrect = () => {
    let turns = this.turns;
    let incorrect = this.incorrectAnswers.length;
    let correct = turns - incorrect;
    let percentCorrect = correct / turns;

    return percentCorrect * 100;

  }

  endRound = () => {
    return 'Game Over';
  } 

}

module.exports = Round