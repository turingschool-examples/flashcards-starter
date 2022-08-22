class Turn{
    constructor(userGuess, card){
        this.userGuess = userGuess; 
        this.card = card.id;
    }
    returnGuess(){
        return this.userGuess;
    }
    returnCard(){
       
        return this.card;
    }
    evaluateGuess() {
        if(this.userGuess !== 'sea otter') {
            return false;
        }
        return true;
    }
    giveFeedback(){
        if(this.userGuess !== 'sea otter' ){
            return 'incorrect!'
        }

        return 'correct'
    }

}

module.exports = Turn;