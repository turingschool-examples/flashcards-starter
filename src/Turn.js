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

}

module.exports = Turn;