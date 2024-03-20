const chai = require('chai');
const expect = chai.expect;
const {createRound, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');
const { it, describe } = require('mocha');
const { createCard, evaluateGuess } = require('../src/card');
const {createDeck, countCards} = require('../src/deck');

describe('round creation', function() {
    it.skip('should be a function', function() {
        expect(createRound).to.be.a('function');
     });
     it.skip('should hold be an object', function() {
        const card1 = createCard(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const deck = createDeck([card1, card2, card3]);
        const currentCard = deck[0];
        const turns = 0
        const incorrectGuess = []

        const round = createRound(deck, currentCard, turns, incorrectGuess)

        expect(round.deck).to.equal(deck)
        expect(round.currentCard).to.equal(card1)
        expect(round.turns).to.equal(0)
        expect(round.incorrectGuess).to.deep.equal([])
     });    
});
describe('take turn', function() {
    it.skip('should be a function', function() {
        expect(takeTurn).to.be.a('function');
     });
     it.skip('', function() {

     });
     it.skip('', function() {

     });
     it.skip('', function() {

     });
     it.skip('', function() {

     });
     it.skip('', function() {

     });
     
});
// describe('calculate percent', function() {
//     it.skip('should be a function', function() {
//         expect(calculatePercentCorrect).to.be.a('function');
//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
     
// });
// describe('end round', function() {
//     it.skip('should be a function', function() {
//         expect(endRound).to.be.a('function');
//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
//      it.skip('', function() {

//      });
     
// });
