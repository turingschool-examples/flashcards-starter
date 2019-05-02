class Turn {
  constructor(userGuess, newCard) {
    this.guess = userGuess,
    this.userCard = newCard
  }

  returnGuess(){
  //  console.log(this.userCard.question);
    return (this.guess);
  }
  returnCard(){
    return (this.userCard);
  }
  evaluateGuess(newGuess){
    // console.log('Turn.guess is: ' + newGuess);
    // console.log('this.correctAnswer is: ' + this.userCard.correctAnswer);
    return (newGuess === this.userCard.correctAnswer ? true : false);

  }
  giveFeedback(guess2check){
  //  console.log('Guess2Check is: ' + guess2check);
    return (this.evaluateGuess(guess2check) ? 'Correct!' : 'Incorrect!');
  }
}
module.exports = Turn;
