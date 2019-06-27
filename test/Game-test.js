const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {
	it('should create cards from data once the game has started', function() {
	const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);
    var game = new Game(round);

    game.start(deck.cardDeck);
    expect(game.deck).to.deep.equal(deck)

	});

	it('should put the cards into a deck', function() {
	const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);
    var game = new Game(round);


    game.start(deck);

    expect(this.currentDeck.cardDeck).to.deep.equal(this.cardDeck)

	});

	it('should keep track of what round the game is on', function() {
	const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    var deck = new Deck([card1, card2, card3]);
    var round = new Round(deck);
    var game = new Game(round);


    game.start(deck);

    expect(game.currentRound).to.equal(0)
    round.endRound();
    expect(game.currentRound).to.equal(1)



	});

});
