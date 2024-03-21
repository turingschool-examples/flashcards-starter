const chai = require('chai');
const expect = chai.expect;
const {createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');
const { it, describe } = require('mocha');
const { createCard, evaluateGuess } = require('../src/card');
const {createDeck} = require('../src/deck');

describe('round creation', function() {
    it('should be a function', function() {
        expect(createRound).to.be.a('function');
     });
     it('should be an object', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        
        const round = createRound(deck)

        expect(round.deck).to.equal(deck)
        expect(round.currentCard).to.equal(card1)
        expect(round.turns).to.equal(0)
        expect(round.incorrectGuess).to.deep.equal([])
     });    
});
describe('take turn', function() {
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function');
     });
    it('should be able to increase turns', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = createDeck([card1, card2, card3]);
        
        const round = createRound(deck)

        const play = takeTurn('array', round)
        

        expect(round.turns).to.equal(1)
        //expect(round.currentCard).to.equal(card[1])
       // expect(play).to.equal('incorrect')
     });
     it('should be able to change current card', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = createDeck([card1, card2, card3]);
        
        const round = createRound(deck)

        const play = takeTurn('array', round)
        
        expect(round.currentCard).to.equal(card2)
     });
     it('should be able to evaluate guess and store ID', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = createDeck([card1, card2, card3]);
        
        const round = createRound(deck)

        const play = takeTurn('array', round)
        

        expect(play).to.equal('incorrect')
        expect(round.incorrectGuess).to.deep.equal([1])
     });
     it('should be able to evaluate a different guess', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = createDeck([card1, card2, card3]);
        
        const round = createRound(deck)

        const play = takeTurn('object', round)
        

        expect(play).to.equal('correct')
     });
});
