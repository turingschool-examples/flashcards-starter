const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

let card1, card2, card3, deck, turn, round; 

describe('Round', function() {

	beforeEach(function() {
		card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		deck = new Deck([card1, card2, card3]);
		turn = new Turn('pug', card1);
		round = new Round(deck);
	});

	it('should be a function', function() {
		expect(Round).to.be.a('function');
	})

	it('should be an instance of Round', function() {
		expect(round).to.be.an.instanceOf(Round);
	});

	it('should return the current card being played', function() {
		expect(round.returnCurrentCard()).to.deep.equal(card1);
	});

	it('should make the next card the current card', function() {
		expect(round.returnCurrentCard()).to.equal(card1);
		round.takeTurn('pug');
		expect(round.returnCurrentCard()).to.equal(card2);
		round.takeTurn('pug');
		expect(round.returnCurrentCard()).to.equal(card3);
	});

	it('should evaluate guess and store incorrect guesses in array', function() {
		const turn1 = new Turn('wrong', card1);
		const turn2 = new Turn('gallbladder', card2);
		expect(round.turns).to.equal(0);
		expect(round.incorrectGuesses.length).to.equal(0);
		round.takeTurn('wrong');
		expect(turn1.giveFeedback()).to.equal('incorrect!');
		expect(round.turns).to.equal(1);
		expect(round.incorrectGuesses.length).to.equal(1);
		round.takeTurn('gallbladder');
		expect(turn2.giveFeedback()).to.equal('correct!');
		expect(round.turns).to.equal(2);
		expect(round.incorrectGuesses.length).to.equal(1);
	});

	it('should return percetage of correct guesses', function(){
		round.takeTurn('wrong');
		expect(round.calculatePercentCorrect()).to.equal(0);
		round.takeTurn('gallbladder')
		expect(round.calculatePercentCorrect()).to.equal(50)
	});

	it('should log a message at end of round', function(){
		round.takeTurn('wrong');
		round.takeTurn('gallbladder');
		round.takeTurn('Fitzgerald');
		expect(round.turns).to.equal(round.deck.length);
	});

})