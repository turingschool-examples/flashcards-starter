class Deck {
	constructor(cards) {
		this.cards = cards;
		this.count = 0;
	}

	countCards() {
		this.count = this.cards.length;
		console.log(this.count);
	}
}

module.exports = Deck;