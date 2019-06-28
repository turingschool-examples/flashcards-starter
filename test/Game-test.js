const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

let card1, card2, card3, turn, deck, round, game; 

describe('Game', function(){

	beforeEach(function(){
		card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
		card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
		card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
		deck = new Deck([card1, card2, card3]);
		turn = new Turn();
		round = new Round(deck);
		game = new Game();
	});

	it('should be a function', function(){
		expect(Game).to.be.a('function');
	});

	it('should be an instance of Game', function(){
		expect(game).to.be.an.instanceOf(Game);
	});

	it('should create cards and put them in a deck', function(){
		// game.printMessage(deck1, round1);
		
	});



})