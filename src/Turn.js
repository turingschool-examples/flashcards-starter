const Card = require("./Card");



class Turn{
    constructor(userGuess, currentCard){

      this.userGuess = userGuess;
      this.currentCard = currentCard;

    }

    returnGuess(){
        //userGuess  
        return this.userGuess
    }

    returnCard(){
        // return this.currentCard
    }

    evaluateGuess(){

    }

    giveFeedback(){

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



 module.Exports = Turn;

