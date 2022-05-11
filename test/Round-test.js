const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {
    let card1;
    let card2;
    let deck;
    let round;

    beforeEach(() => {
        card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = new Card(2, 'What uses indices to keep track of ordered information?', ['object', 'array', 'function'], 'array');
        deck = new Deck([card1, card2]);
        round = new Round(deck);
    })
    
    it('should return current card', () => {
        expect(round.returnCurrentCard()).to.equal(card1);
    })

    it('should be able to to take a turn', () => {
        expect(round.takeTurn()).to.be.an.instanceOf(Turn)
    });
})