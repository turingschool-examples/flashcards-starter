const chai = require('chai');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const testData = require('../src/test-data');
const sampleDeck = testData.sampleDeck;
const expect = chai.expect;

// const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
//Move the cards up so that every test can access them!!!!
//let thing
//research before each beforeEach(() => {
    // think = thinf.map etc etc
// })

    let newDeck
    let card3
    let card4
    let card5
    beforeEach(() => {
        newDeck = sampleDeck.map(card => {
            return new Card(card.id, card.question, card.answers, card.correctAnswer)
        });
        newDeck = new Deck(newDeck)
        card3 = newDeck.cards[2]
        card4 = newDeck.cards[3]
        card5 = newDeck.cards[4]
    });


    it(`Should be a function`, function() {
        const turn = new Turn();
        expect(Turn).to.be.a(`function`);
    });

    it(`should be an instance of Card`, function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it(`should store a guess`, function() {
        const turn = new Turn("mutator method", card3)
        expect(turn.guess).to.equal("mutator method");
    })

    it(`should store a card`, function() {
        const turn = new Turn("mutator method", card3);
        expect(turn.card).to.equal(card3);
    })

    it(`should return a guess`, function() {
        const turn = new Turn("accessor method", card4);
        expect(turn.returnGuess()).to.equal("accessor method");
    })

    it(`should return '' if no guess is given`, function() {
        const turn = new Turn();
        expect(turn.returnGuess()).to.equal('');
    })

    it(`should return the card`, function() {
        const turn = new Turn("accessor method", card4);
        expect(turn.returnCard()).to.equal(card4);
    })

    it(`should return {} if no card is given`, function() {
        const turn = new Turn();
        expect(turn.returnCard()).to.deep.equal({});
    })

    it(`should evaluate if a guess is correct or not`, function() {
        const turn1 = new Turn("iteration method", card5);
        const turn2 = new Turn("accessor method", card5);

        expect(turn1.evaluateGuess()).to.equal(true);
        expect(turn2.evaluateGuess()).to.equal(false);
    })

    it(`should give positive feedback if answer is correct`, function() {
        const turn = new Turn("iteration method", card5);
        expect(turn.giveFeedback()).to.equal("correct!")
    })

    it(`should give positive feedback if answer is incorrect`, function() {
        const turn = new Turn("accessor method", card5);
        expect(turn.giveFeedback()).to.equal("incorrect!")
    })

});



