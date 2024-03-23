
const chai = require('chai');
const expect = chai.expect;

const {createDeck, countCards} = require('../src/deck');
const {createCard} = require('../src/card');

describe('createDeck', () => {
    it.skip('should be a function', () => {
        expect(createDeck).to.be.a('function')
    })
    it.skip('should take in an array of cards and return it.skip for variable storage', () => {
        const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
        const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
        const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

        const deck = createDeck([card1,card2,card3]);
        
        expect(deck[0]).to.deep.equal(card1);
        expect(deck[1]).to.deep.equal(card2);
        expect(deck[2]).to.deep.equal(card3);

    })
});

describe('countCards', () => {
    it.skip('should be a function', () =>{
        expect(countCards).to.be.a('function')
    });
    it.skip('should be able to return the length of a deck', () => {
        const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
        const card2 = createCard(60,'test card 3',['test','evil test','good test'],'good test');
        const card3 = createCard('e','test card 2',['test','evil test','good test'],'evil test');

        const deck = createDeck([card1,card2,card3]);
        const numOfCards = countCards(deck)

        expect(numOfCards).to.equal(3)

    });
});
