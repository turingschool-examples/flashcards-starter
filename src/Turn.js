
class Turn{
    constructor(userGuess, currentCard){

      this.userGuess = userGuess;
      this.currentCard = currentCard;

    }

    returnGuess(){
        
        return this.userGuess;
    }

    returnCard(){
      
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
            if (this.evaluateGuess() === false){
                return 'NEXT TIME! :(';
            } else {
                return 'ON POINT!'; 
            }
        }

};




 module.exports = Turn;

