const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.currentTurn = new Turn(null, deck[0]);
        this.currentCard = this.currentTurn.returnCard();
        this.turnCount = 0;
        this.guesses = {
            right: [],
            wrong: []
        };

    };

    returnCurrentCard() {
        return this.currentCard;
        
    };

    takeTurn(userGuess, nextCard) {
        this.updateUserGuess(userGuess);
        this.addToTurnCounter();
        const messege = this.evaluateGuess(userGuess);
        this.newTurn(userGuess, nextCard);
        return messege;

    };

    updateUserGuess(userGuess) {
        this.currentTurn.userGuess = userGuess;
    };

    addToTurnCounter() {
        this.turnCount++;
        
    };

    evaluateGuess(userGuess) {
        switch (userGuess) {
            case this.currentCard.correctAnswer:
                this.guesses.right.push(this.currentCard.id);
                break;
            default:
                this.guesses.wrong.push(this.currentCard.id);
                
        };
        
        return this.currentTurn.giveFeedback();

    };

    newTurn(userGuess, nextCard) {
        this.currentTurn = new Turn(userGuess, nextCard);
        this.currentCard = this.currentTurn.returnCard();

    };    

    calculatePercentCorrect() {
        return `${((this.guesses.right.length / this.turnCount) * 100)}%`;

    };

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
    }

};

module.exports = Round;