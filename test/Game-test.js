const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', function () {

    beforeEach(() => {
    round = new Round(deck)
    deck = new Deck([card1, card2, card3])

    it('should create an instance of Round', function() {
        expect(game.currentRound()).to.be.an.instanceof(Round);
    })


    });

});
