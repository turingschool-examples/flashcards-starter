const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {
	it('should be a function', function() {
    expect(Game).to.be.a('function');
	});
	
	it('should be an instance of Game', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

		const deck = new Deck([card1, card2, card3]);

		const round = new Round(deck);

		const game = new Game(round);

		expect(game).to.be.an.instanceof(Game);
	}); 

	it('should keep track of the current round', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

		const deck = new Deck([card1, card2, card3]);

		const round = new Round(deck);

		const game = new Game(round);

		expect(game.currentRound).to.be.equal(round);
	});

	it('when game starts, cards should be created', function() {
		const game = new Game();
		
		game.start();

		expect(game.currentCards[0].id).to.equal(data[0].id);
	})

	it('when game starts, a deck is created with the cards', function() {
		const game = new Game();

		game.start();

		expect(game.currentDeck).to.be.an.instanceOf(Deck);
	})

	it('when game starts, a round is created using the deck', function() {
		const game = new Game();

		game.start();

		expect(game.currentRound).to.be.an.instanceOf(Round);
	})
})