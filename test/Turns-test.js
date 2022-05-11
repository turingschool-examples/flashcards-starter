const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turns = require('../src/Turns');

describe('Turns', () => {

    it('should be a function', () => {
        const turns = new Turns;
        expect(Turns).to.be.a('function');
    });

    it('should instantiate of Turns', () => {
        const turns = new Turns;
        expect(turns).to.be.an.instanceof(Turns);
    });

    it('should have a user’s guess to the question and object for the current card in play', () => {
        const card = new Card; //(3)
        const turns = new Turns('guess',card);
        
        expect(turns.guess).to.equal('guess');
        expect(turns.currentCard).to.an('object');

    });
})