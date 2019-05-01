const chai = require('chai');
const expect = chai.expect;

const Card = 	require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

	it('should be a function', function() {
		const round = new Round();
		expect(Round).to.be.a('function');
	});

	it('should be able to create a new instance of Round', function() {
		const round = new Round();
		expect(round).to.be.instanceof(Round);
	});

	it('should return the current card i.e. the first Card in the Deck array', function() {
		const round = new Round([card1, card2, card3]);
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);

		round.returnCurrentCard();
		expect(round.currentCard).to.equal(card1)
	})
})