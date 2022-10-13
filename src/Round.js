const Turn = require("./Turn");

class Round {
    constructor(deck, game) {
        this.deck = deck;
        this.currentCard = deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = [];
        this.game = game;
        this.tries = 0;
    };

    returnCurrentCard() {
        return this.currentCard;
    };

    takeTurn(guess) {
        const turn = new Turn(guess, this.currentCard);
        if (turn.evaluateGuess() && this.incorrectGuesses.includes(this.currentCard.id)) {
            this.incorrectGuesses.splice(this.incorrectGuesses.indexOf(this.currentCard.id), 1);
        } else if (!turn.evaluateGuess() && !this.incorrectGuesses.includes(this.currentCard.id)) {
            this.incorrectGuesses.push(this.currentCard.id);
        }
        this.turns++;
        this.currentCard = this.deck.cards[this.turns];
        return turn.giveFeedback();
    };

    calculatePercentCorrect() {
        const percent = (1 - this.incorrectGuesses.length / this.turns) * 100;
        return percent.toFixed(2) + '%';
    };

    refreshDeck() {
        this.deck.cards = this.deck.cards.filter(card => this.incorrectGuesses.includes(card.id));
        this.currentCard = this.deck.cards[0];
        this.turns = 0;
    }
    endRound() {
        let endMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
        if (this.incorrectGuesses.length > 0) {
            if (this.tries === 0) {
                console.log('\x1b[41m%s\x1b[0m', endMessage, '\n');
            };
            this.tries++;
            this.refreshDeck();
            console.log('\x1b[41m%s\x1b[0m', `You've missed ${this.deck.cards.length} questions. Let's try those again!`, '\n');
            this.game.printQuestion(this);
        } else {
        console.log('\x1b[41m%s\x1b[0m', `You did it! You answered all questions correctly!`);
        console.timeEnd('Total time spent');
        }
    };
};

module.exports = Round;