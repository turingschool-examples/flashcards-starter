class Round {
    constructor(deck) {
        this.deck = deck;
        this.numOfTurns = 0;
        this.incorrectGuesses = [];
    }
}


module.exports = Round;


// Round class takes in responses and records guesses (correct or incorrect)
// currentCard should be the first Card in the Deck at the start of the Round

// returnCurrentCard >> returns thecurrent card being played

// takeTurn >> updates turns count, evaluates guesses, gives feedback,stores ids of incorrect guess
// --- when aguess is made,a new Turn instance is created
// --- the turns count is updated, regardless of whether the guess is corrector incorrect
// --- the next card become the current turn
// --- guess is evaluated/recorded.  incorrect guesses will be stored via theid in an array of incorrectGuesses
// --- feedback is returned regarding whether the guess is correct or incorrect

// calculatePercentCorrect >> calculates and returnsthe percentage of correct guesses

// endRound >> prints to the console: ‘** Round over! ** You answered <>% of the questions correctly!’