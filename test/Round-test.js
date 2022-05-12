const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round',() => {
    let round, deck, turn, card, card1, card2, card3;

    beforeEach(() => {
         card1 = new Card( 2,"What is a comma-separated list of related values?",["array", "object", "function"], "array");
         card2 = new Card( 3,"What type of prototype method directly modifies the existing array?",["mutator method", "accessor method", "iteration method"],"mutator method"); 
         card3 = new Card( 4,"What type of prototype method does not modify the existing array but returns a particular representation of the array?",["mutator method", "accessor method", "iteration method"],"accessor method");

         deck = new Deck([card1, card2, card3]);
         round = new Round(deck);
         turn = new Turn('object',card); 
    })

    it('should be a function',() => {
        expect(Round).to.be.a('function');
    })

    it('should be an instance of Round',() => { 
        expect(round).to.be.an.instanceOf(Round);
    })

    it('should store a deck',() => {
        expect(round.deck).to.equal(deck);
    } )

    it('should record and update number of turns',() => {
        round.takeTurn('guess');
        expect(round.turns).to.equal(1);
    } )

    it('should return the current card being played',() => {
        expect(round.returnCurrentCard()).to.equal(card1);
    })

    it('should be able to record incorrect guesses',() => {
        round.takeTurn('friend');
        expect(round.incorrectGuesses).to.deep.equal([2]);
    })
    
    it('should calculate percent correct',() => {
        round.calculatePercentCorrect();
        expect(round.calculatePercentCorrect()).to.equal(100);
    } )

    it('should display message when round is over',() => {
        round.endRound();
        expect(round.endRound()).to.equal(`** Round over! ** You answered 100% of the questions correctly!`);
    } )
});
