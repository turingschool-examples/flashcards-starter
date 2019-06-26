const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

	it('should be a function', function() {
    	const round = new Round();

    	expect(Round).to.be.a('function');
 	});


  	it('should be an instance of Round', function() {
    	const round = new Round();

    	expect(round).to.be.an.instanceof(Round);
  	});


  	it('should have a method that returns the current card from the deck', function() {
  		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);

    	expect(round.returnCurrentCard()).to.equal(card1);
    	round.takeTurn();
    	expect(round.returnCurrentCard()).to.equal(card2);
    });


  	it('should have increment up the turn count by one every time the user takes a turn', function() {
    	const round = new Round();

    	expect(round.turnCounter).to.equal(0);
    	round.incrementCounter();
    	expect(round.turnCounter).to.equal(1);
  	});


  	it('should record incorrect guesses', function() {
  		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  		const deck = new Deck([card1, card2, card3]);
    	const round = new Round(deck);

    	expect(round.incorrectGuesses.length).to.equal(0);
    	round.takeTurn('pug');
    	expect(round.incorrectGuesses.length).to.equal(1);

    	expect(round.incorrectGuesses.length).to.equal(1);
    	round.takeTurn('gallbladder');
    	expect(round.incorrectGuesses.length).to.equal(1);

    	expect(round.incorrectGuesses.length).to.equal(1);
    	round.takeTurn('Lex'); 
    	expect(round.incorrectGuesses.length).to.equal(2);
  	});

  	it('calculate the percentage of correct guesses', function() {
    	const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  		const deck = new Deck([card1, card2, card3]);
    	const round = new Round(deck);

    	round.takeTurn('pug');
    	round.takeTurn('gallbladder');
    	round.takeTurn('Lex'); 

    	expect(round.calculatePercentCorrect()).to.equal(33)

  	});

  	it('can end this round of the game', function() {
    	const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  		const deck = new Deck([card1, card2, card3]);
    	const round = new Round(deck);

    	round.takeTurn('pug');
    	round.takeTurn('gallbladder');
    	round.takeTurn('Lex'); 

    	expect(round.endRound()).to.equal('Round over! ** You answered 33% of the questions correctly!')

  	});


  	});
