
class Turn{
    constructor(userGuess, currentCard){

      this.userGuess = userGuess;
      this.currentCard = currentCard;

    }

    returnGuess(){
        //userGuess  
        return this.userGuess;
    }

    returnCard(){
        // console.log(curentCard, 100)
        return this.currentCard;
    }

    evaluateGuess(){
      if (this.userGuess !== this.returnCard.correctAnswer){
          return false;
      } else {
          return true;
    }
    }
    giveFeedback(){
        if (this.userGuess !== this.currentCard.correctAnswer){
            return 'NEXT TIME! :(';
        } else {
            return 'ON POINT!';
      }
    }
};

//instantiate two arguments
// arg 1 instantiate a string tht is  a user's guess to a question
// arg 2 card object for current card
// 4 methods
// - returnGues
// - returnCard
 // - evaluateGuess
 // - giveFeedback



 module.exports = Turn;

