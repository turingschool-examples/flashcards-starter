const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
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

    it('should record that there was a turn taken', () => {
        round.takeTurn('object');
        round.takeTurn('object');
        expect(round.turns).to.equal(2)
    })

    it('should move to the next card', () => {
        round.takeTurn('object');
        expect(round.returnCurrentCard()).to.equal(card2)
    })
    it('should evaluate and record guess', () => {
        round.takeTurn('bananas');
        round.takeTurn('apple');
        expect(round.incorrectGuesses[0]).to.equal(1)
        expect(round.incorrectGuesses.length).to.equal(2)
    })
    it('should return feedback if wrong', () => {
        expect(round.takeTurn('bananas')).to.equal('incorrect!');
    })

    it('should return feedback if correct', () => {
        expect(round.takeTurn('object')).to.equal('correct!');
    })
    
    it('should calculate the percentage of correct answers', () => {
        round.takeTurn('object');
        round.takeTurn('bananas');
        expect(round.calculatePercentage()).to.equal(50);
    })

    it('should be able to end the round', () => {
        round.takeTurn('object');
        expect(round.endRound()).to.equal(`** Round over! ** You answered 100% of the questions correctly!`)
    })
})