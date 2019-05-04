class Round {
  constructor(currentDeck) {
    this.deck = currentDeck,
    this.turnCount = 0,
    this.incorrectGuesses = [],
    this.currentCardIdx = 0
  }

  takeTurn(newGuess) {
    this.turnCount++;
    const Turn = require('../src/Turn');
    const turn = new Turn(newGuess, this.deck.cards[this.currentCardIdx]);
    this.currentCardIdx++;
    const answer = turn.giveFeedback(newGuess);
    if(answer === 'Incorrect!') {
      this.incorrectGuesses.push(this.deck.cards[this.currentCardIdx].cardId);
    }
    return answer;
  }
  returnCurrentCard() {
        return this.deck.cards[this.currentCardIdx];
  }

  calculatePercentCorrect() {
    return Math.round((1 - this.incorrectGuesses.length / this.turnCount)* 10000)/100;
  }
  endRound(){
    let correctPercentage = this.calculatePercentCorrect();
    if(correctPercentage >= 90) {
    console.log('\n  *** Round Over! ***   You answered \x1b[35m' + correctPercentage + '%\x1b[30m of the questions correctly!\n');
    setTimeout((function() {  
      return process.exit(0);
  }), 1500);
    } else {
    console.log('\nYou answered \x1b[35m' + correctPercentage + '%\x1b[30m of the questions correctly! Unfortunately, that\'s not good enough. Try, try again.\n');
    const Game = require('../src/Game');
    const game = new Game();
    game.start();
    }
  }
}

module.exports = Round;