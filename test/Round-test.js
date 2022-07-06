const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
// const Round = require('../src/Round');
describe('Round', function() {
    it('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });
    it('should return the current card being played', function() {
        const round = new Round();
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const deck = new Deck();
        expect(round.returnCurrentCard).to.equal(deck.cards);
    });
});