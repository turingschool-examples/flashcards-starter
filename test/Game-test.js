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
		const game = new Game();

		expect(game).to.be.an.instanceof(Game);
	}); 

	it('when game starts, should keep track of the current round', function() {
		const game = new Game();

		game.start();

		expect(game.currentRound).to.be.an.instanceOf(Round);
	});

	it('when game starts, current round should be based on the deck in play', function() {
		const game = new Game();

		game.start();

		expect(game.currentRound).to.deep.equal(new Round(game.currentDeck));
	});

	it('if game does not start, no round is instantiated', function() {
		const game = new Game();

		expect(game.currentRound).to.not.be.an.instanceOf(Round);
	});


	it('when game starts, cards should be created', function() {
		const game = new Game();
		
		game.start();

		expect(game.currentCards[0].id).to.equal(data[0].id);
	});

	it('when game starts, cards should be from the dataset of 30', function() {
		const game = new Game();
		
		game.start();

		expect(game.currentCards).to.deep.equal(data);
	});

	it('if game does not start, no cards are recorded', function() {
		const game = new Game();

		expect(game.currentCards).to.not.equal(data);
	});

	it('when game starts, a deck is instantiated', function() {
		const game = new Game();

		game.start();

		expect(game.currentDeck).to.be.an.instanceOf(Deck);
	});

	it('when game starts, a deck should contain all the cards in play', function() {
		const game = new Game();

		game.start();

		expect(game.currentDeck).to.deep.equal(new Deck(game.currentCards));
	});

	it('if game does not start, no deck is instantiated', function() {
		const game = new Game();

		expect(game.currentDeck).to.not.be.an.instanceOf(Deck);
	});
})