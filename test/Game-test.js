const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Game', function() {
    let game

    beforeEach(() => {
        card1 = new Card(1, 'What color is the sky', ['orange', 'green', 'blue'], 'blue');
        card2 = new Card(2, 'What month is Halloween in', ['October', 'December', 'June'], 'October');
        card3 = new Card(3, 'What animal has stripes', ['lion', 'zebra', 'cow'], 'zebra');
        card4 = new Card(4, 'When is breakfast eaten', ['morning', 'afternoon', 'night'], 'morning')
        deck1 = new Deck([card1, card2, card3, card4])
        game = new Game();
    })

    it('should be a function', function() {
        expect(Game).to.be.a('function');
    })

    it('should be an instance of the Game', function() {
        expect(game).to.be.an.instanceof(Game);
    })

    it('should track current round', function() {
        expect(game.currentRound).to.be.an('object')
    })

})