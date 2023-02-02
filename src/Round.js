class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard() {
       return this.deck.cards[0]
    }

    takeTurn(guess) {
        const turn = new Turn(guess, currentCard)
        this.turns ++;
        const currentCard = this.returnCurrentCard();
        const usedCards = [];
        usedCards.push(currentCard);
        if (this.deck.length === 0) {
            this.deck = usedCards
        }
        turn.guess = guess
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards.id)
        }
        turn.givesFeedback()
    }

    calculatePercentCorrect() {
        return (this.turns - this.incorrectGuesses)/100
    }
}


module.exports = Round