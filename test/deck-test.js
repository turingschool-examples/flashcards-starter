
const chai = require('chai');
const expect = chai.expect;

const {createDeck, countCards} = require('../src/deck');
const {createCard, takeTurn } = require('../src/card');

describe('createDeck', () => {
    it.skip('should take in an array of cards and return a deck object', () => {
        const card1 = createCard(1,'test card 1',['test','evil test','good test'],'test');
        const card2 = createCard(2,'test card w',['test','evil test','good test'],'good test');
        const card3 = createCard(3,'test card w',['test','evil test','good test'],'evil test');

        const deck = createDeck([card1,card2,card3]);
    })

});