const Card = require("./Card")

class Turns {
 constructor(guess,currentCard) {
     this.guess = guess;
     this.currentCard = currentCard;
 };
 returnGuess() {
     return this.guess;
 };
 returnCard() {
     return this.currentCard;
 };
 evaluateGuess() {
     if (this.guess === this.currentCard.correctAnswer) {
         // anlamadim nasil bir baglanti var currentcard ile correctanswer arasinda
         return true;
     };
        return false;
     };
 giveFeedback() {
    if (this.evaluateGuess()) {
       return 'correct!'
    };
       return 'incorrect!'
    };
 }

 

    
module.exports = Turns;