const Card = require('../src/Card');


class Turn{
	constructor (userGuess, card) {
		this.userGuess = userGuess;
		this.currentCard = card;
	}

	returnGuess(){
		return this.userGuess;
	}

	returnCard(){
		return this.currentCard;
	}

	evaluateGuess(){
		return this.currentCard.correctAnswer === this.userGuess;
	}


	giveFeedback(){
		return this.evaluateGuess() ? 'Correct!' : 'Incorrect!'
	}

}




 module.exports = Turn;


