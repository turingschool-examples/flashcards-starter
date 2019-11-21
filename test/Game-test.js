const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/deck');
const Card = require('../src/Card');
const Round = require('../src/round');
const Game = require('../src/Game');
const Turn = require('../src/turn');
const Data = require('../src/data');

describe('Game', function() {


    it('should create cards', function() {
        const game = new Game();
        
        expect(game.start()).to.equal(30);
    });

});
