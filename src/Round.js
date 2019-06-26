const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;



class Round{
	constructor(deck){
    	this.turnCounter = 0
		this.deck = deck || [];
    	this.incorrectGuesses = []
	}

	returnCurrentCard(){
		return const currentCard = this.deck.cardDeck[this.turnCounter]
	}

	takeTurn(userGuess){
		const turn = new Turn(userGuess, currentCard);
		this.turnCounter ++ 
    	
    	if(turn.evaluateGuess === false){
      		this.incorrectGuesses.push(currentCard.id)
    	}

    	return turn.giveFeedback();
	}

	calculatePercentCorrect(){
		const percent = Math.round((1 / this.incorrectGuesses.length) * 100)
		return percent;
	}

	endRound(){
		return `** Round over! ** You answered ${percent} of the questions correctly!`
	}
}
