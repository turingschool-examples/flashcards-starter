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
        const card = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const turn = new Turn('array', card);

        expect(turn.returnGuess()).to.equal('array');
    })

    it('should return the card', () => {
        const card = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const turn = new Turn('array', card);

        expect(turn.returnCard()).to.deep.equal( { id: 1, question: 'What type of object is closest to a list?', answers: [ 'array', 'string', 'boolean' ], correctAnswer: 'array' });
    })

    it('should check guess to see if it matches correct answer on card', () => {
        const card = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const turn1 = new Turn('array', card);
        const turn2 = new Turn('string', card);

        expect(turn1.evaluateGuess()).to.equal(true);
        expect(turn2.evaluateGuess()).to.equal(false);
    })

    it('should return feedback based on an incorrect/correct guess', () => {
        const card = new Card(1, 'What type of object is closest to a list?', ['array', 'string', 'boolean'], 'array');
        const turn1 = new Turn('array', card);
        const turn2 = new Turn('string', card);

        expect(turn1.giveFeedback()).to.equal('correct!');
        expect(turn2.giveFeedback()).to.equal('incorrect!');
    })
})