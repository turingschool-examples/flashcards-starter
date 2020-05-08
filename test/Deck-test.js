const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

	it('should be a function', function() {
    	expect(Deck).to.be.a('function');
	});

	it('should be an instance of Deck', function() {
		const deck = new Deck();

		expect(deck).to.be.an.instanceof(Deck);
  }); 

	it('should take in multiple cards', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const card4 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3, card4]);
		
		expect(deck.cards).to.deep.equal([card1, card2, card3, card4]);
	});

	it('should take in any number of cards', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const deck = new Deck([card1, card2]);
		
		expect(deck.cards).to.deep.equal([card1, card2]);
	});

	it('if cards is not a list of cards on instantiation, cards are undefined in the deck', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const deck = new Deck(card1);
		
		expect(deck.cards).to.equal(undefined);
	});

	it('should count the cards in the deck', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);

		deck.countCards();

		expect(deck.count).to.equal(3);
	});
})