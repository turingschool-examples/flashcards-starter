class Deck {
	constructor(cards = []) {
		this.cards = cards;
	}

	countCards(cardAmount) {
		this.cards = cardAmount;
		return this.cards;
	}

}

module.exports = Deck;