const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.incorrectGuesses = [];
    this.deck = deck;
    this.turn = 0;
  }

  returnCurrentCard(){
    return this.deck.card[this.turn]
  }

  takeTurn(guess){
    const card = this.returnCurrentCard()
    console.log("card", card)
    const turn = new Turn(guess,card);
    console.log("turn", turn)
    this.turn++;
    console.log("evaluateGuess", !turn.evaluateGuess())
    if(!turn.evaluateGuess()) this.incorrectGuesses.push(card.id);
    console.log("incorrectGuesses", this.incorrectGuesses);
    turn.giveFeedback();
    console.log("giveFeedback", turn.giveFeedback())
    turn.currentCard = this.returnCurrentCard();
    console.log("currentsCard", turn.currentCard)
  }

  calculatePercentCorrect(){

  }

  endRound(){

  }
}

module.exports = Round;



// * When a guess is made, a new Turn instance is created.
//*  The turns count is updated, regardless of whether the guess is correct or incorrect
//* Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
//* Feedback is returned regarding whether the guess is incorrect or correct
//* The next card becomes current card








//stop
