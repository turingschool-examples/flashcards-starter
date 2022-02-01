const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', () => {

    it('should be a function', () => {

        expect(Turn).to.be.a('function')
    })

    it('should take guess and Card instance as arguments', () => {
        const card = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const turn = new Turn('array', card);

        expect(turn.guess).to.equal('array');
    })

    it('should return guess', () => {
        const card2 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const turn2 = new Turn('array', card2);

        expect(turn2.returnGuess()).to.equal('array');
    })

    it('should return the card', () => {
        const card3 = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const turn3 = new Turn('array', card3);

        expect(turn3.returnCard()).to.deep.equal( { id: 1, question: 'What type of object is closest to a list?', answers: [ 'array', 'string', 'boolean' ], correctAnswer: 'array' });
    })
})