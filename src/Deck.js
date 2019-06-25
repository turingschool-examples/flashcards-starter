class Deck {
	constructor(cards){
		this.cardDeck = cards || [];

	}

	countCards(){
		return this.cardDeck.length;
	}

}


module.exports = Deck;


//Your Deck class should be initialized with an array of Card objects and should have an accompanying 
//test file. It should know how many Cards are in the Deck.