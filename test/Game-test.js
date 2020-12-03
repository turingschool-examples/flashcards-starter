const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');
const Turn = require('../src/Turn');


describe('Game', function() {


    it('should have a current game', function() {

        const game = new Game();
        console.log(game.currentRound);
        expect(game.currentRound).to.be.an.instanceof(Round);
    })
})