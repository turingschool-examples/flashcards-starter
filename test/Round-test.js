const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

	it('should be a function', function() {
		const round = new Round();
		expect(Round).to.be.a('function');
	});

	it('should be an instance of Round', function() {
		const round = new Round();
		expect(round).to.be.an.instanceof(Round);
	});

	it('should default to having the first card in the deck return as the current card', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const deck1 = new Deck([card1]);
		const round = new Round(deck1);

		round.returnCurrentCard();

		expect(round.returnCurrentCard()).to.equal(deck1.cards[0]);
	});

	it('should be able to return any card in the deck as current card', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck1 = new Deck([card1, card2, card3]);
		const round = new Round(deck1);

		round.returnCurrentCard();

		expect(round.returnCurrentCard()).to.equal(deck1.cards[0]);

		round.takeTurn('otter');

		expect(round.returnCurrentCard()).to.equal(deck1.cards[1]);
	});

	it('should push incorrect guesses to incorrectGuess array', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const deck1 = new Deck([card1]);
		const round = new Round(deck1);

		expect(round.incorrectGuess.length).to.equal(0);

		round.takeTurn('pug');

		expect(round.incorrectGuess.length).to.equal(1);
	});

	it('should give feedback based on your guess', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const deck1 = new Deck([card1]);
		const round = new Round(deck1);

		expect(round.takeTurn('sea otter')).to.equal('Correct!');
	});

	it('should calculate the percentage of correct guesses');
})