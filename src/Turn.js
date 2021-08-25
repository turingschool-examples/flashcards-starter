class Turn {
    constructor(guess, card) {
        this.card = card;
        this.guess = card.answers[guess];
        this.correct;
    }
    returnGuess(){
        return this.guess;
    }
    returnCard(){
        return this.card;
    }
    evaluateGuess(){
        if (this.guess === this.card.correctAnswer){
            this.correct = true;
            return true
        }
        else if (!this.guess === this.card.correctAnswer){
            this.correct = false;
            return false
        }
    }
    giveFeedback(){
        evaluateGuess();
        switch (this.correct){
            case true:
                return 'Correct!';
            case false:
                return 'Incorrect!';
            default:
                return `Error this.correct=${this.correct}  this.card=${this.card} this.guess=${this.guess}`;
        }
        
    }
}

module.exports = Turn;