class Round {
	constructor() {
		this.currentCard = currentCard;
	}

	returnCurrentCard() {
		this.currentCard = deck.cards.shift();
		return this.currentCard;
	}
}

module.exports = Round;