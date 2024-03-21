const chai = require('chai');
const expect = chai.expect;

const {createDeck, countCards} = require('../src/deck');
const {createCard, evaluateGuess} = require('../src/card');
const {round, takeTurn, calculatePercentCorrect, endRound} = require('../src/round');

describe('round & constructor.', ()=>{
    it('should be afunction', () => {
        expect(round).to.be.a('function');
    });
    it('new round() should create an object with an array containing null for the deck attribute', () => {
        const newRound = round();
        expect(newRound.deck[0]).to.equal(null)
    });
    it('should return an object with a(n):\n          -deck holding cards \n          -current card counter that starts at the first card \n          -turns counter \n          -array storing incorrect guesses', () =>{
        const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
        const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
        const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

        const deck = createDeck([card1,card2,card3]);
        
        const newRound = round(deck)

        expect(newRound.currentCard).to.deep.equal(deck[0])
        expect(newRound.turns).to.equal(0)
        expect(newRound.incorrectGuesses[0]).to.equal(null)
        expect(newRound.deck).to.deep.equal(deck)
    });
});

describe('takeTurn', () => {
    const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
    const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
    const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

    const deck = createDeck([card1,card2,card3]);
    
    const newRound = round(deck)
    it.skip('should increment round instance turn counter by 1',()=>{
        
    });
    it.skip('should queue up the next card for the following turn', ()=>{

    });
    it.skip('should evaluate a given guess and store incorrect guesses in the proper array of the round instance',()=>{

    });
    it.skip('should display evaluation feedback in the console',()=>{

    });
    it.skip('incorrect guesses should remain default if guess is correct',()=>{

    });
    it.skip('should remove the placeholder null value when storing incorrect guesses', ()=>{

    });


});