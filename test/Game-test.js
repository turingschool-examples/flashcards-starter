const chai = require('chai');
const expect = chai.expect;

const cardData = require('../src/data');
const prototypeQuestions = cardData.prototypeData;
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game();

    });

    it('should be a function', () => {
        expect(Game).to.be.a('function');

    });

    it('should start a game', () => {
        expect(game.start).to.be.a('function');

    });

    it('should keep track of current round', () => {
        game.newRound(prototypeQuestions);
        expect(game.currentRound).to.be.a.instanceOf(Round);

    });


    it('should create cards', () => {
        game.start(prototypeQuestions);
        expect(game.deck.cards).to.deep.equal(prototypeQuestions);

    });

    it('should create new round using deck', () => {
        game.start(prototypeQuestions);
        expect(game.currentRound.currentCard).to.equal(prototypeQuestions[0]);

    });

});

