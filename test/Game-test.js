const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Deck = require('../src/deck');
const Round = require('../src/round');

describe('Game', () => {
    it('Should be a function', () => {
        expect(Game).to.be.a('function');
    });

    it('Should be an instance of Game', () => {
        const newGame = new Game();

        expect(newGame).to.be.an.instanceOf(Game);
    });

    it('Should have two properties for the current Deck and Round', () => {
        const newGame = new Game();

        expect(newGame.currentDeck).to.equal(null);
        expect(newGame.currentRound).to.equal(null);
    })

    it('Should instantiate a new instance of Deck', () => {
        const newGame = new Game();

        newGame.initializeGame();
        
        expect(newGame.currentDeck).to.be.an.instanceOf(Deck);
    })

    it('Should instantiate a new instance of Round', () => {
        const newGame = new Game();
        
        newGame.initializeGame();

        expect(newGame.currentRound).to.be.an.instanceOf(Round);
    })
});