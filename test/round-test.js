const chai = require('chai');
const expect = chai.expect;

const {createDeck, countCards} = require('../src/deck');
const {createCard, evaluateGuess} = require('../src/card');
const {round, takeTurn, calculatePercentCorrect, endRound, calculateTime} = require('../src/round');

describe('round & constructor.', ()=>{
    it.skip('should be afunction', () => {
        expect(round).to.be.a('function');
    });
    it.skip('new round() should create an object wit.skiph an array containing null for the deck attribute', () => {
        const newRound = round();
        expect(newRound.deck[0]).to.equal(null)
    });
    it.skip('should return an object wit.skiph a(n):\n          -deck holding cards \n          -current card counter that starts at the first card \n          -turns counter \n          -array storing incorrect guesses', () =>{
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
    it.skip('should increment round instance turn counter by 1',()=>{
        const newRound = round(deck);
        const nextRound = takeTurn(newRound)[0];
        expect(nextRound.turns).to.equal(1);
    });
    it.skip('should queue up the next card for the following turn', ()=>{
        let newRound = round(deck);
        newRound = takeTurn(newRound)[0];
        let nextRound = takeTurn(newRound)[0];
       
        expect(newRound.currentCard).to.deep.equals(deck[1])
        expect(nextRound.currentCard).to.deep.equals(deck[2])
    });
    it.skip('should evaluate a given guess and store incorrect guesses in the proper array of the round instance',()=>{
        const newResults = takeTurn(round(deck), 'wrong')
        expect(newResults[0].incorrectGuesses[0]).to.equals('wrong')
    });
    it.skip('should return evaluation feedback as a string',()=>{
        const newResults = takeTurn(round(deck))
        expect(newResults[1]).to.equal('incorrect!')
    });
    it.skip('incorrect guesses should remain default if guess is correct and no incorrect guesses have been made.',()=>{
        let newResults = takeTurn(round(deck), 'test');
        newResults = takeTurn(newResults[0],'good test');
        newResults = takeTurn(newResults[0],'evil test');
        expect(newResults[0].incorrectGuesses).to.deep.equal([null])
    });
});

describe('calculatePercentCorrect', () => {
    const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
    const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
    const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

    const deck = createDeck([card1,card2,card3]);
    it.skip('should be a function.', ()=>{
        expect(calculatePercentCorrect).to.be.a('function');
    });
    it.skip('should calculate the ratio of correct and incorrect guesses as a percentage', ()=>{
        let cumulativeRounds = takeTurn(round(deck), 'test');
        cumulativeRounds = takeTurn(cumulativeRounds[0], 'good test');
        let alternateRounds = takeTurn(cumulativeRounds[0],'i don\'t know!');
        cumulativeRounds = takeTurn(cumulativeRounds[0],'evil test');
        
        const cumulativeResults = calculatePercentCorrect(cumulativeRounds[0]);
        const alternateResults = calculatePercentCorrect(alternateRounds[0]);

        expect(cumulativeResults).to.equal('100%');
        expect(alternateResults).to.equal('66%');
    });
    it.skip('should return an error message if the round ends wit.skiph no turns taken', ()=>{
        const errorResult = calculatePercentCorrect(round(deck));
        const errorResult_1 = calculatePercentCorrect(round());
        expect(errorResult).to.equal('Error: no guesses to calculate, perhaps the deck was not properly init.skipialized?');
        expect(errorResult_1).to.equal('Error: no guesses to calculate, perhaps the deck was not properly init.skipialized?');
    });
});

describe('endRound',()=>{
    const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
    const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
    const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

    const deck = createDeck([card1,card2,card3]);
    it.skip('should be a function',()=>{
        expect(endRound).to.be.a('function');
    });
    it.skip('should interpret the results of calculatePercentCorrect stored as a property of a round in a message printed to the console',()=>{
        let cumulativeRounds = takeTurn(round(deck), 'test');
        cumulativeRounds = takeTurn(cumulativeRounds[0], 'good test');
        cumulativeRounds = takeTurn(cumulativeRounds[0],'evil test');
        
        cumulativeRounds.result = calculatePercentCorrect(cumulativeRounds[0]);
        const resultMessage = endRound(cumulativeRounds);
        expect(resultMessage).to.equal('** Round over! ** You answered 100% of the questions correctly!');
    });
    it.skip('should not return anything if the results contains a caught error message',()=>{
        const errorResult = calculatePercentCorrect(round(deck));
        const resultMessage = endRound(errorResult)
        expect(resultMessage).to.equal(undefined);
    });
});

describe('calculateTime', () => {
    it.skip('should take in a time in two time in ms and return a string with the time in minutes and seconds',() =>{
        const startTime = 0
        const completeTime = 100000
        const totalTime = calculateTime(startTime,completeTime)
        expect(totalTime).to.equal(`1 minutes and 40 seconds`)
    })

})