const chai = require('chai');
const expect = chai.expect;

const cardData = require('../src/data');
const prototypeQuestions = cardData.prototypeData;
const Card = require('../src/Card')
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    let game;

    beforeEach(() => {
        game = new Game(prototypeQuestions);

    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');

    });

    it('should start a game', () => {
        expect(game.start).to.be.a('function');

    });

    it('should keep track of current round', () => {
        game.start();
        expect(game.currentRound).to.be.a.instanceOf(Round);

    });

    xit('should create cards', () => {
        const cards1 = prototypeQuestions.map(card => new Card(card));
        game.createCards(prototypeQuestions);
        expect(game.cards).to.deep.equal(cards1);

    });

    it('should create new round using deck', () => {
        game.start();
        expect(game.currentRound.currentCard).to.deep.equal(prototypeQuestions[0]);

    });

});

