const chai = require('chai');
const Turn = require('../src/Turn');
const expect = chai.expect;

// const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
//Move the cards up so that every test can access them!!!!
//let thing
//research before each beforeEach(() => {
    // think = thinf.map etc etc
// })
    it(`Should be a function`, function() {
        const turn = new Turn();
        expect(Turn).to.be.a(`function`);
    });

    it(`should be an instance of Card`, function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it(`should store a guess`, function() {
        const card = new Card((3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"))
        const turn = new Turn("mutator method", card)
        expect(turn.guess).to.equal("mutator method");
    })

    it(`should store a card`, function() {
        const card = new Card((3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method"))
        const turn = new Turn("mutator method", card);
        expect(turn.card).to.equal(card);
    })

    it(`should return a guess`, function() {
        const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
        const turn = new Turn("accessor method", card);
        expect(turn.returnGuess()).to.equal("accessor method");
    })

    it(`should return the card`, function() {
        const card = new Card(4, "What type of prototype method does not modify the existing array but returns a particular representation of the array?", ["mutator method", "accessor method", "iteration method"], "accessor method")
        const turn = new Turn("accessor method", card);
        expect(turn.returnCard()).to.equal(card);
    })

    it(`should evaluate if a guess is correct or not`, function() {
        const card = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",  ["mutator method", "accessor method", "iteration method"], "iteration method");
        const turn1 = new Turn("iteration method", card);
        const turn2 = new Turn("accessor method", card);

        expect(turn1.evaluateGuess()).to.equal(true);
        expect(turn2.evaluateGuess()).to.equal(false);
    })

    it(`should give positive feedback if answer is correct`, function() {
        const card = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",  ["mutator method", "accessor method", "iteration method"], "iteration method");
        const turn = new Turn("iteration method", card);

        expect(turn.giveFeedback()).to.equal("correct!")
    })

    it(`should give positive feedback if answer is incorrect`, function() {
        const card = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",  ["mutator method", "accessor method", "iteration method"], "iteration method");
        const turn = new Turn("accessor method", card);
        expect(turn.giveFeedback()).to.equal("incorrect!")
    })

});



