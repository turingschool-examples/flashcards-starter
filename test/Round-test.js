const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

    it('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it('should be an instance of the Round class', function() {
        const round = new Round();
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should store a guess', function() {
        const round = new Round('a1');
        expect(round.guess).to.equal('a1');
    });

    it('should store the first card of the deck as the current card', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round('a', deck.cards[0]);
        
        expect(round.currentCard).to.deep.equal({id: 1, question: "Question1", answers: ["a1", "b1", "c1"], correctAnswer: "a1"});
    });

    it('should return the current card', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round('a', deck.cards[0]);
        
        expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: "Question1", answers: ["a1", "b1", "c1"], correctAnswer: "a1"});
    });

    it.skip('should update turns count', function() {

    });
})