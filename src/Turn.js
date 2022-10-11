class Turn {
    constructor( guess, cardDetails){
    this.guess = guess;
    this.card = cardDetails;
    this.won = false;
  }
 
  returnGuess() {
 return this.guess;
 }

 returnCard() {
    return this.card;
 }
 evaluateGuess(card) {
   if(this.guess === card.correctAnswer) {
     this.won = true;
    return true
   } else {
    this.won = false;
    return false;
   }
 }
 giveFeedBack(){
    if(this.won === true){
      return 'Correct'  
    } else {
        return Incorrect
    }
 }
};

module.exports = Turn; 