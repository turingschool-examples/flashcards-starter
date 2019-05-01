class Round {
	constructor(cards, currentCard) {
		this.cards = cards;
		this.currentCard = currentCard;
	}

	returnCurrentCard() {
		this.currentCard = this.cards.shift();
		return this.currentCard;
	}
}

module.exports = Round;