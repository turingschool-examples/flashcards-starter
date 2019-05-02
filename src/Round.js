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
    const answer = turn.giveFeedback(newGuess);
    if(answer === 'Incorrect!') {
      //console.log('Yahoo!!!');
      this.incorrectGuesses.push(newCard.cardId);
     // console.log('incorrectGuesses is: ' + this.incorrectGuesses);
    }
      // console.log('turnCount is: ' + this.turnCount);
    return answer;
    
  }
  returnCurrentCard(testDeck) {
   // console.log(testDeck);
        return testDeck.cards[this.currentCardIdx];
  }

  calculatePercentCorrect() {
   // console.log( this.incorrectGuesses.length / this.turnCount);
    return Math.round((1 - this.incorrectGuesses.length / this.turnCount)* 10000)/10000;
   // result=Math.round(original*100)/100 
  }
  endRound(){
   // console.log('*** Round Over! ***You answered <>% of the questions correctly!');
    return '*** Round Over! ***You answered <>% of the questions correctly!';
  }
}

module.exports = Round;