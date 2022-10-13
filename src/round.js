var Turn = require('./turn');


class Round{
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck.cards[0];
        this.numOfTurns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard)
        this.numOfTurns++;
        turn.evaluateGuess();
        
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }

        const feedback = turn.giveFeedback();
        this.currentCard = this.deck.cards[this.numOfTurns];
        return feedback;
    }

    calculateScore() {
        const score = ((this.numOfTurns - this.incorrectGuesses.length) / this.numOfTurns) * 100
        const stringScore = score.toFixed(0)
        return parseInt(stringScore);
    }

    endRound() {
        const endRoundStatement = `** Round over! ** You answered ${this.calculateScore()}% of the questions correctly!`;
        console.log(endRoundStatement);
        return endRoundStatement;
    }
}

module.exports = Round;