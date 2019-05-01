class Deck {
	constructor(cards) {
		this.cards = cards || [];
	}

	countCards(cardAmount) {
		this.cards.push(cardAmount);
		console.log(this.cards)
	}

}

module.exports = Deck;