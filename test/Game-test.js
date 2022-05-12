const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', () => {
    let card1;
    let card2;
    let deck;
    let round;
    let game;

    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What uses indices to keep track of ordered information?', ['object', 'array', 'function'], 'array');
        deck = new Deck([card1, card2]);
        round = new Round(deck);
        game = new Game();
    })
    
    it('should keep track of current round', () => {
        game.start();
        expect(game.currentRound).to.equal(round)
    })
})