const Turn = require("./Turn");

class Round {
    constructor(deck) {
        this.deck = deck;
        this.guesses = [];
        //correct and incorrect separate ^^
        this.turnCount = 0;
        this.currentCard = this.deck.cards[this.turnCount];
        this.incorrectGuesses = [];
        //use turncount for deck index num ^^
        // this.turns = [];
    };

    returnCurrentCard() {
        return this.currentCard;
    };

    takeTurn(userGuess) {
        this.turnCount += 1;
        this.currentCard = this.deck.cards[this.turnCount];
        const currentTurn = new Turn(userGuess, this.currentCard);
        const correctfulness = currentTurn.giveFeedback();
        if (correctfulness === 'incorrect!') {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        console.log(this.turnCount);
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
        `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    };
};





module.exports = Round;