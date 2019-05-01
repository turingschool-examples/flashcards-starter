const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

	it('should be a function', function() {
		const deck = new Deck();
		expect(Deck).to.be.a('function');
	});

	it('should accept an array of Cards', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const deck = new Deck([card1]);
		expect(deck.cards).to.deep.equal([card1]);
	});

	it('should keep track of the amount of cards', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck();

		deck.countCards([card1, card2, card3]);
		expect(deck.cards).to.deep.equal([card1, card2, card3]);
	})

})