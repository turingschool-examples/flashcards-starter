const chai = require('chai');
const expect = chai.expect;

const {createDeck, countCards} = require('../src/deck');
const {createCard, evaluateGuess} = require('../src/card');
const {round, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');

describe('round & constructor.', ()=>{
    it('should be afunction', () => {
        expect(round).to.be.a('function');
    });
    it('new round() should create an instance of round class with an array containing null for the deck attribute', () => {
        const newRound = new round();
        expect(newRound).to.be.an.instanceOf(round)
    });
    it('should return an object with a(n):\n          -deck holding cards \n          -current card counter that starts at the first card \n          -turns counter \n          -array storing incorrect guesses', () =>{
        const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
        const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
        const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

        const deck = createDeck([card1,card2,card3]);
        
        const newRound = new round(deck)

        expect(newRound.currentCard).to.deep.equal(deck[0])
        expect(newRound.turns).to.equal(0)
        expect(newRound.incorrectGuesses[0]).to.equal(null)
        expect(newRound.deck).to.deep.equal(deck)
    });
});