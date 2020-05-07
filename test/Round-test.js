const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

	it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

	it('should be an instance of Round', function() {
			const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
			const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
			const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
			const deck = new Deck([card1, card2, card3]);
	
			const round = new Round(deck);

			expect(round).to.be.an.instanceof(Round);
	}); 

	it('should contain a deck of cards', function() {
			const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
			const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
			const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
			const deck = new Deck([card1, card2, card3]);
	
			const round = new Round(deck);
	
			expect(round.deck).to.deep.equal([card1, card2, card3]);
	});

	it('should return current card in play', function() {
			const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
			const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
			const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
			const deck = new Deck([card1, card2, card3]);
	
			const round = new Round(deck);

			round.takeTurn('pug');
			round.takeTurn('sea otter');
			round.returnCurrentCard();

			expect(round.currentCard).to.equal(card3);
	})

	it('should keep track of turns taken in the game', function() {
			const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
			const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
			const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
			const deck = new Deck([card1, card2, card3]);
	
			const round = new Round(deck);

			round.takeTurn('sea otter');

			expect(round.turns).to.equal(1);
	})

	it('should record incorrect guesses', function() {
			const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
			const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
			const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
			const deck = new Deck([card1, card2, card3]);
			const round = new Round(deck);

			round.takeTurn('pug');

			expect(round.incorrectGuesses[0]).to.equal(card1.id);
	})

	it('after a turn, should make the next card the current card', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

		const deck = new Deck([card1, card2, card3]);
		const round = new Round(deck);

		expect(round.currentCard).to.equal(card1);

		round.takeTurn('pug');
		round.returnCurrentCard();

		expect(round.currentCard).to.equal(card2);
})

	it('should tell the user if their guess is correct', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
		const deck = new Deck([card1, card2, card3]);
	
		const round = new Round(deck);
		const feedback = round.takeTurn();

		round.takeTurn('pug');

		expect(feedback).to.equal('incorrect!');
	})

	it('should return percent of correct guesses', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
		const deck = new Deck([card1, card2, card3]);
	
		const round = new Round(deck);
		
		round.takeTurn('sea otter');
		round.takeTurn('gallbladder');
		round.takeTurn('listening to music');
		round.calculatePercentCorrect();
		
		expect(round.correctPercent).to.equal(67);
	})

	it('should return end message', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
	
		const deck = new Deck([card1, card2, card3]);
	
		const round = new Round(deck);
		
		round.takeTurn('sea otter');
		round.takeTurn('gallbladder');
		round.takeTurn('listening to music');
		round.calculatePercentCorrect();
		
		round.endRound();
		const endMessage = round.endRound()
		
		expect(endMessage).to.equal(`** Round over! ** You answered 67% of the questions correctly!`);
	})
});