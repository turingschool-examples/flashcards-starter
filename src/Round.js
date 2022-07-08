class Round {
    constructor() {
        this.currentTurn = new Turn(null, cardData.prototypeData[0]);
        this.currentCard = this.currentTurn.returnCard();
        this.turnCount = 0;
        this.guesses = {
            right: [],
            wrong: []
        };

    };

    turnHandeler(userGuess, nextCard) {
        this.addToTurnCounter();
        const messege = this.takeTurn(userGuess);
        this.newTurn(userGuess, nextCard);
        return messege;

    };

    addToTurnCounter() {
        this.turnCount++;
    };

    takeTurn(userGuess) {
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

var cardData = require('../src/data');
var Turn = require('../src/Turn');
module.exports = Round;