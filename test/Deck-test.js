const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
//const Turn = require('../src/Turn');

describe('Deck', function() {
    let cardsArray;
    beforeEach(function() {
        cardsArray = 
        new Card({});

    });
    it('should be a function', function() {
        expect().to.be.a('function');
    });
    it('should instantiate', function() {
        expect(correctTurn).to.be.an.instanceof(Turn);
    }); 

});