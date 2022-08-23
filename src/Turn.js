class Turn{
    constructor(userGuess, card){
        this.userGuess = userGuess; 
        this.card = card;
    }
    returnGuess(){
        return this.userGuess;
    }
    returnCard(){
       
        return this.card.id;
    }
    evaluateGuess() {
        if(this.userGuess !== this.card.correctAnswer) {
            console.log(this.card.correctAnswer)
            return false;
        } else {
            return true;
        }
        
    }
    giveFeedback(){
        let result = this.evaluateGuess();

        if(result === true){
            return 'correct!';
        }else{
            return 'incorrect!'
        }
    }

}

module.exports = Turn;