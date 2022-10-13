const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnCount = 0;
        this.currentCard = this.deck.cards[this.turnCount];
        this.incorrectGuesses = [];
    };

    returnCurrentCard() {
        return this.currentCard;
    };

    takeTurn(userGuess) {
        this.turnCount += 1;
        const currentTurn = new Turn(userGuess, this.currentCard);
        const correctfulness = currentTurn.giveFeedback();
        if (correctfulness === 'incorrect!') {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.currentCard = this.deck.cards[this.turnCount];
       return correctfulness;
    };

    calculatePercentCorrect() {
        const totalCorrect = this.deck.length - this.incorrectGuesses.length;
        return (totalCorrect/this.deck.length) * 100;
    };

    // giveFeedback() {
    //     //if (this.takeTurn() === 'correct!') {
    //     //uhhhhhhhh make it move on to the next card
    //     //Maybe that ^^ could go in the index.js file?
    //     //}
    //     return this.takeTurn();
    // };

    endRound() {
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    };
};


module.exports = Round;