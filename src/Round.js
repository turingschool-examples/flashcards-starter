const Turn = require('../src/Turn');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

class Round{
	constructor(deck){
    	this.turnCounter = 0
		this.deck = deck || [];
    	this.incorrectGuesses = []
	}

	returnCurrentCard(){ 
		const currentCard = this.deck.cardDeck[this.turnCounter];
		return currentCard
	}

	takeTurn(userGuess){
		const currentCard = this.deck.cardDeck[this.turnCounter];
		const turn = new Turn(userGuess, currentCard);

    	if(turn.evaluateGuess() === false){
      		this.incorrectGuesses.push(currentCard.id)
    	}

		this.incrementCounter();
    	return turn.giveFeedback();
	}

	calculatePercentCorrect(){
		const percent = Math.round(100 - (this.incorrectGuesses.length * 100) / this.turnCounter)
		return percent;
	}

	endRound(){
		return console.log(`Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
	}

	incrementCounter() {
		this.turnCounter++ 
	}
}

module.exports = Round;
