class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck[0];
        this.turns = 0;
        this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return this.currentCard;
    }
    takeTurn(guess) {
        this.turns += 1;
        this.currentCard = deck[this.turns];
        if (guess != this.currentCard.correctAnswer) {
            this.incorrectGuesses.push(this.currentCard.id);
            return "Incorrect!"
        } else {return "Correct!"}
        /*
        - When a guess is made, a new Turn instance is created.
        - The turns count is updated, regardless of whether the guess is correct or incorrect
        - The next card becomes current card
        - Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
        - Feedback is returned regarding whether the guess is incorrect or correct
        */
    }
}

module.exports = Round;