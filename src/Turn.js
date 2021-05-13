class Turn {
    constructor(guess, card){  
        this.guess = guess;
        this.card = card;
    }

    returnGuess = () =>  this.guess;

    returnCard = () => this.card;
    
    evaluateGuess = () => this.guess === this.card.correctAnswer ? true : false;
    
    giveFeedback(){
        return this.evaluateGuess() ?  "correct!" : "incorrect!";
    } 
        
}

module.exports = Turn;