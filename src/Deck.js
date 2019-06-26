const Card = require('../src/Card');

class Deck{
	constructor(cards){
		this.cardDeck = cards;
	}

	countCards(){
		return this.cardDeck.length;
	}

}


module.exports = Deck;
