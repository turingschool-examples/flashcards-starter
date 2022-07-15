const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data');
const prototypeCards = data.prototypeData.map((card) => {
    return new Card(card.id, card.question, card.answers, card.correctAnswer);
   });
describe('Game', function() {
    let card, cards, deck, round, game, card1, card2, card3;

    beforeEach(() => {
        game = new Game(round);
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'),
        card2 = new Card(4,'What type of prototype method does not modify the existing array but returns a particular representation of the array?', ["mutator method", "accessor method", "iteration method"], 'accessor method'),
        card3 = new Card(13, 'The callback function for map() returns a modified version of the current element.', ["true", "false"], 'true'),
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    });
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });
    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceof(Game);
    });
    it('should keep track of the current round', () => {
        // console.log('hiiiiiii', game.currentRound)
        expect(game.currentRound.turnCount).to.equal(0);
    });
    it('should create new cards when the game is started', () => {
        // console.log('game', game)
        expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
    });

    it.only('should create new round', () => {
        game.createRound();
        console.log('pls werk', game.currentRound, 'previous round', round);
        expect(game.currentRound).to.be.an.instanceOf(Round);
    });
    it.only('should start new Round with a deck', () => {
        game.createRound();
        // console.log('cries', game.currentRound.deck)
        
        expect(game.currentRound.deck.cards).to.equal(prototypeCards);
    });
    it('should be able to start the game', () => {
        expect(game.startGame).to.be.a('function');
    });
});