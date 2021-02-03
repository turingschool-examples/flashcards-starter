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
    let sampleCards
    beforeEach(() => {
        sampleCards = sampleDeck.map(card => {
            return new Card(card.id, card.question, card.answers, card.correctAnswer);
        })
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
        expect(round.deck).to.deep.equal(sampleCards)
    })

    it(`should return the current card being played`, function() {
        const round = new Round(sampleCards);
        expect(round.returnCurrentCard()).to.equal(sampleCards[0])
    })

    describe('takeTurn', function() {
    
        it(`should add one to turns for every round played`, function() {
            const round = new Round(sampleCards);
    
            expect(round.turns).to.equal(0);
            
            round.takeTurn();
            round.takeTurn();
            round.takeTurn();
            
            expect(round.turns).to.equal(3);
        })
    
        it(`should make the next card in the array the current card`, function() {
            const round = new Round(sampleCards);
            expect(round.returnCurrentCard()).to.equal(sampleCards[0])

            round.takeTurn();

            expect(round.returnCurrentCard()).to.equal(sampleCards[1]);
        })

        it(`should should add the ids of incorrect guesses to in the array`, function() {
            const round = new Round(sampleCards);
            
            expect(round.incorrectGuesses).to.deep.equal([]);

            round.takeTurn()
            //I need to check the false answer I pass in against the first card in sample cards
            // I need to make sure it's pushed into the array. I should also check a correct answer 
        })
    })
})
  