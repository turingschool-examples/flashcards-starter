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
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);

		round.returnCurrentCard();
		expect(round.returnCurrentCard()).to.equal(card1)
	});


//it should have a method increment the count of turns, move to the next card in the array, and record guesses
	it('should have a method that increments the number of turns', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);

		round.takeTurn();
		expect(round.turns).to.equal(1);
	});

	it('should keep track of incorrect guesses', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);

		round.takeTurn('pug');
		round.takeTurn('gallbladder');
		expect(round.turns).to.equal(2);
		expect(round.incorrectGuesses).to.eql([1]);

	});

	it('should give feedback to the user and display if the answer is correct or incorrect', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);
 
		
		expect(round.takeTurn('sea otter')).to.equal('correct!');
		expect(round.takeTurn('gallbladder')).to.equal('correct!');
	}); 

	it('should calculate the percentage of correct guesses', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);

		round.takeTurn('pug');
		round.takeTurn('gallbladder');
		round.takeTurn('Fitzgerald');
		expect(round.calculatePercentCorrect()).to.equal(67)
	});

	it('should indicate to the user that the round is over and output a message', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);

		round.takeTurn('pug');
		round.takeTurn('gallbladder');
		round.takeTurn('Fitzgerald');
		expect(round.endRound()).to.equal(`** Round Over! ** You answered ${round.calculatePercentCorrect()} % of the questions correctly!`);
	})

})