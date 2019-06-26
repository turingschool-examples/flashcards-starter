const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

	it('should be a function', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const turn = new Turn('pug', card1);
		const round = new Round(deck);
		expect(Round).to.be.a('function');
	})

	it('should be an instance of Round', function() {
		const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
		const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
		const deck = new Deck([card1, card2, card3]);
		const turn = new Turn('pug', card1);
		const round = new Round(deck);
		expect(round).to.be.an.instanceOf(Round);
	});

	it('should return the current card being played', function() {
		const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		const deck1 = new Deck([card1, card2, card3]);
		const turn = new Turn('pug', card1);
		const round = new Round(deck1);
		expect(round.returnCurrentCard()).to.deep.equal(card1);
	});

	it('should make the next card the current card', function() {
		const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		const deck1 = new Deck([card1, card2, card3]);
		const turn = new Turn('pug', card1);
		const round = new Round(deck1);
		expect(round.returnCurrentCard()).to.equal(card1);
		round.takeTurn(turn);
		expect(round.returnCurrentCard()).to.equal(card2);
		round.takeTurn(turn);
		expect(round.returnCurrentCard()).to.equal(card3);
	});

	it('should evaluate guess and store incorrect guesses in array', function() {
		const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		const deck1 = new Deck([card1, card2, card3]);
		const turn1 = new Turn('wrong', card1);
		const turn2 = new Turn('gallbladder', card2);
		const round = new Round(deck1);
		expect(round.turns).to.equal(0);
		expect(round.incorrectGuesses.length).to.equal(0);
		round.takeTurn(turn1);
		expect(turn1.giveFeedback()).to.equal('incorrect!');
		expect(round.turns).to.equal(1);
		expect(round.incorrectGuesses.length).to.equal(1);
		round.takeTurn(turn2);
		expect(turn2.giveFeedback()).to.equal('correct!');
		expect(round.turns).to.equal(2);
		expect(round.incorrectGuesses.length).to.equal(1);
	});

	it('should return percetage of correct guesses', function(){
		const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		const deck1 = new Deck([card1, card2, card3]);
		const turn1 = new Turn('wrong', card1);
		const turn2 = new Turn('gallbladder', card2)
		const round = new Round(deck1);
		round.takeTurn(turn1);
		expect(round.calculatePercentCorrect()).to.equal(0);
		round.takeTurn(turn2)
		expect(round.calculatePercentCorrect()).to.equal(50)
	});

	it('should log a message at end of round', function(){
		const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		const deck1 = new Deck([card1, card2, card3]);
		const turn1 = new Turn('wrong', card1);
		const turn2 = new Turn('gallbladder', card2);
		const turn3 = new Turn('Fitzgerald', card3);
		const round = new Round(deck1);
		round.takeTurn(turn1);
		round.takeTurn(turn2);
		round.takeTurn(turn3);
		expect(round.turns).to.equal(round.deck.length);
	});

})