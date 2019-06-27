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

	evaluateGuess(currentCard, userGuess){
		return this.currentCard.correctAnswer === this.userGuess ? true : false;
	}

	giveFeedback(){
		return this.evaluateGuess() ? 'Correct!' : 'Incorrect!'
	}

}




 module.exports = Turn;


