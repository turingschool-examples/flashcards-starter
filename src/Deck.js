class Deck {
	constructor(cards) {
		this.cards = Array.isArray(cards) ? cards : undefined;
		this.count = 0;
	}

	countCards() {
		this.count = this.cards.length;
		return this.count;
	}
}

module.exports = Deck;