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
 evaluateGuess() {
   if(this.guess === this.card.correctAnswer) {
     this.won = true;
    return true
   } else {
    this.won = false;
    return false;
   }
 }
 giveFeedBack() {
    console.log("SWEATER:", this.guess)
    console.log('HAT:',this.card.correctAnswer)
    if(this.guess === this.card.correctAnswer){
        console.log("Anythang")
      return 'Correct!'  
    } else {
        console.log("something")
        return 'Incorrect!'
    }
 }
};

module.exports = Turn; 