const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');

describe('Game', function() {

    it('should be a function', function() {
        const newGame = new Game();
        expect(Game).to.be.a('function');
    });

    it('should create a new instance of a round', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const newGame = new Game();
        expect(newGame).to.be.an.instanceOf(Game);
    });

    it('should create new instances of cards when game starts', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const newGame = new Game();
        newGame.start(false)
        expect(newGame.currentRound.deck.deck[0]).to.be.an.instanceOf(Card);
    });

    it('should create a new instance of deck when game starts', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const newGame = new Game();
        newGame.start(false)
        expect(newGame.currentRound.deck).to.be.an.instanceOf(Deck);
    })

    it('should create a new instance of round when game starts', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        const newGame = new Game();
        newGame.start(false)
        expect(newGame.currentRound).to.be.an.instanceOf(Round);
    })
});