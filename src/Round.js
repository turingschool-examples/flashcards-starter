class Round {
  constructor(deck) {
    this.deck = deck; 
    this.currentCard = this.deck.cards[0];
    this.turnCount = 0; 
    this.incorrectGuess = [];
    // console.log(this.currentCard)
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(){
    const turn = new Turn(guess, this.currentCard);
    this.turnCount ++; 
    console.log(this.turnCount);
    // return turn.giveFeedback(), 
  }
}

module.exports = Round; 

