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
		expect(round).to.be.an.instanceof(Round)
	});

	it('should have the first card of the deck be the current card', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck.cards);

		expect(round.currentCard).to.equal(deck.cards[0]);
	});

	it('should return the current card being played', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const deck = new Deck([card1]);
		const round = new Round(deck.cards, deck.cards[0]);
		
		expect(round.currentCard).to.equal(deck.cards[0]);

		round.returnCurrentCard();

		expect(round.returnCurrentCard()).to.equal(deck.cards[0])
	});

	it('should create a new instance of turn when a turn is taken', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const deck = new Deck([card1]);
		const round = new Round(deck.cards);

		round.takeTurn('sea otter')
	});

})