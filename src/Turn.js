class Turn {
  constructor(userGuess, card) {
    this.guess = userGuess,
    this.userCard = card
  }

  returnGuess(){
    console.log(this.userCard.question);
    return (this.guess);
  }
  returnCard(){
    return (this.userCard);
  }
  evaluateGuess(  ){

  }
  giveFeedback(){

  }
}

module.exports = Turn;
