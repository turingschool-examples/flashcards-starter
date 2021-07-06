const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


describe('Round', () => {
    let card1, card2, card3, deck, round;

    beforeEach(() => {
        card1 = new Card(10, 'Which iteration method returns the first array element where the callback function returns true?', ['find()', 'filter()', 'forEach()'], 'find()');
        card2 = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'], 'the accumulator');
        card3 = new Card(22, 'Which prototype method is used to iterate over each property of an object?', ['Object.keys()', 'Object.values()', 'reduce()'], 'Object.keys()');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        // turn = new Turn('guess');
    });

    it('should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', () => {
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should instanciate a Deck', () => {
        expect(round.deck).to.be.an.instanceOf(Deck);
    });

    it('should have a way to count turns', () => {
        expect(round.numOfTurns).to.equal(0);
    });

    it('should store the incorrect guesses', () => {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });

});