class Round {
  constructor(currentDeck) {
    this.deck = currentDeck,
    this.turnCount = 0,
    this.incorrectGuesses = [],
    this.currentCardIdx = 0
  }

  takeTurn(newCard, newGuess) {
    this.turnCount++;
    const Turn = require('../src/Turn');
    const turn = new Turn(newGuess, newCard);
    //console.log(turn);
    this.currentCardIdx++;
    //console.log(newCard.question);
    return turn.giveFeedback(newGuess);
    // console.log('turnCount is: ' + this.turnCount);
    // return answer;
    

  }
  returnCurrentCard(testDeck) {
   // console.log(testDeck);
        return testDeck.cards[this.currentCardIdx];
  }

  calculatePercentCorrect() {

  }
  endRound(){

  }
}

module.exports = Round;