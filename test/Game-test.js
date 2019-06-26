const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function(){

	it('should be a function', function(){
		const game = new Game();
		expect(Game).to.be.a('function');
	});

	it('should be an instance of Game', function(){
		const game = new Game();
		expect(game).to.be.an.instanceOf(Game);
	});

	it('should create cards and put them in a deck', function(){
		const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		const deck1 = new Deck([card1, card2, card3]);
		const round1 = new Round(deck1);
		const game = new Game();
		game.printMessage(deck1, round1);
	})

})