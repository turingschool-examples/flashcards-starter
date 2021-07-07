const Turn = require('../src/Turn');

class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = this.deck.cards[0];
        this.numOfTurns = 0;
        this.incorrectGuesses = [];
        this.correctGuesses = 0;
    }

    returnCurrentCard() {
        return this.currentCard;
    }

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);

        if (!turn.evaluateGuess(guess)) {
            this.incorrectGuesses.push(this.currentCard.id)
        } else {
            this.correctGuesses += 1;
        }

        turn.giveFeedback(guess);
        this.numOfTurns += 1;
        this.currentCard = this.deck.cards[this.numOfTurns];
    }

    calculatePercentCorrect() {;
        let percentage = (this.correctGuesses / this.numOfTurns) * 100;
        return Math.round(percentage);
    }

    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    }
}


module.exports = Round;


// Round class takes in responses and records guesses (correct or incorrect)
// currentCard should be the first Card in the Deck at the start of the Round

// returnCurrentCard >> returns the current card being played

// takeTurn >> updates turns count, evaluates guesses, gives feedback,stores ids of incorrect guess
// --- when a guess is made,a new Turn instance is created
// --- the turns count is updated, regardless of whether the guess is corrector incorrect
// --- the next card become the current turn
// --- guess is evaluated/recorded.  incorrect guesses will be stored via theid in an array of incorrectGuesses
// --- feedback is returned regarding whether the guess is correct or incorrect

// calculatePercentCorrect >> calculates and returnsthe percentage of correct guesses

// endRound >> prints to the console: ‘** Round over! ** You answered <>% of the questions correctly!’