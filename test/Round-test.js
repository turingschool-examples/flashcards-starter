const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  
	this.beforeEach(() => {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
	});

	it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should accept a deck as an argument in its constructor', function() {
    expect(round.deck).to.equal(deck);
  });

	it('should instantiate a new Turn object each time a guess is made', function() {
		round.takeTurn('sea otter');
		expect(round.currentTurn).to.be.an.instanceOf(Turn);
	});

	it('should have a turns property that begins at zero', function() {
    expect(round.turns).to.equal(0);
  });

	it('should update the turns count as the game progresses', function() {
		round.takeTurn('sea otter');
		expect(round.turns).to.equal(1);
	});

	it('should have a property, incorrectGuesses, that begins as an empty array', function() {
		expect(round.incorrectGuesses).to.deep.equal([]);
	});

	it('should store the id of cards that were guessed incorrectly', function() {
		round.takeTurn('pug');
		expect(round.incorrectGuesses).to.deep.equal([1]);
	});

	it('should begin with the first card and be able to return the current card being played', function() {
		expect(round.returnCurrentCard()).to.equal(deck[0]);
	});

	it('should update the current card after each turn', function() {
		round.takeTurn('sea otter');
		expect(round.returnCurrentCard()).to.equal(deck[1]);
	});

	it('should give feedback on whether the guess was correct or incorrect', function() {
		expect(round.takeTurn('sea otter')).to.equal('correct!');
	});

	it('should calculate the percentage of correct guesses', function() {
		round.takeTurn('sea otter');
		round.takeTurn('spleen');
		round.takeTurn('Fitzgerald');
		expect(round.calculatePercentCorrect()).to.equal(67);
	});

	it('should print a message at the end of the round', function() {
		round.takeTurn('sea otter');
		round.takeTurn('spleen');
		round.takeTurn('Fitzgerald');
		expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!');
	});
});
