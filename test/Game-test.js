const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');


describe('Game', () => {
   let game;

    beforeEach(() => {
        game = new Game();
    })

    it('should be an instance of Game', () => {
        expect(game).to.be.an.instanceOf(Game);
    })
    
    it('should start with empty object for current Round', () => {
        expect(game.currentRound).to.deep.equal({})
    })
})