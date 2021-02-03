const chai = require('chai');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const {sampleDeck} = require('../src/test-data');
const expect = chai.expect;

describe('Round', function() {
    // let sampleDeck
    // console.log(testDeck)
    // beforeEach(funtion() {

    // })
    const sampleCards = sampleDeck.map(card => {
        return new Card(card.id, card.question, card.answers, card.correctAnswer);
    })

    it(`Should be a function`, function() {
        const round = new Round();
        expect(Round).to.be.a(`function`);
    });

    it(`should be an instance of Round`, function() {
        const round = new Round();
        expect(round).to.be.an.instanceOf(Round);
    })

    it(`should keep track of the deck`, function() {
        const round = new Round(sampleCards);
        expect(round.deck).to.equal(sampleCards)
    })

    it(`should return the current card being played`, function() {
        const round = new Round(sampleCards);
        expect(round.returnCurrentCard()).to.equal(sampleCards[0])
    })

    

})