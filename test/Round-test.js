const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn')
const Round = require('../src/Round');
const prototypeData = require('../src/data');

describe('Round', function() {
    let cardsArray;
    let newDeck;
    beforeEach(function() {
        cardsArray = [new Card(prototypeData[0]), new Card(prototypeData[1]), new Card(prototypeData[2])];
        newDeck = new Deck(cardsArray);
        newRound = new Round();
    });
    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });
    it('should instantiate a new Round', function() {
        expect(newRound).to.be.an.instanceof(Round);
    }); 
});