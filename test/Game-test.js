const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
    let card, cards, deck, round, game, card1, card2, card3;

    beforeEach(() => {
        game = new Game();
        card = new Card({cardIdNumber: this.cardIdNumber, question: this.question, answers: this.answers, correctAnswer: this.correctAnswer});
        cards = [
        card1 = new Card(),
        card2 = new Card(),
        card3 = new Card()];
        deck = new Deck(cards);
        round = new Round(deck);
    });
    it('should be a function', () => {
        expect(Game).to.be.a('function');
    });
    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceof(Game);
    });
    it('should need a deck of cards to play game', () => {
        expect(game.deck).to.deep.equal({});
    });
    it('should keep track of the current round', () => {
        expect(game.currentRound).to.deep.equal({});
    });
    it('should create new cards when the game is started', () => {
        expect(game.createCard()).to.equal(game.cards[card]);
    })
    it('should put cards into the deck', () => {
        expect(game.cardToDeck()).to.equal(game.deck);
    });
    it('should create new round using the deck', () => {
        expect(game.createRound()).to.equal(game.currentRound)
    });
    it('should be able to start the game', () => {
        expect(game.startGame).to.be.a('function');
    });
});