const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

    it('should take a user\'s guess and a Card as an argument', () => {
        const card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange')
        const turn = new Turn('orange', card);

        expect(turn.guess).to.equal('orange');
        expect(turn.card).to.deep.equal(card);
    })

    it('should be able to return the guess', () => {
        const card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange')
        const turn = new Turn('orange', card);
        
        expect(turn.returnGuess()).to.equal('orange');
    })

    it('should be able to return the Card', () => {
        const card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange')
        const turn = new Turn('orange', card);

        expect(turn.returnCard()).to.equal(card);
    })

    it('should be able to evaluate the guess when the answer is correct', () => {
        const card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange')
        const turn = new Turn('orange', card);

        expect(turn.evaluateGuess()).to.equal(true)
    })

    it('should be able to evaluate the guess when the answer is incorrect', () => {
        const card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange')
        const turn = new Turn('blue', card);

        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('should be able to give feedback when the answer is correct', () => {
        const card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange')
        const turn = new Turn('orange', card);

        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal('Correct! 😎');
    })

    it('should be able to give feedback when the answer is incorrect', () => {
        const card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange')
        const turn = new Turn('blue', card);

        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal('Incorrect! 🙁');
    })

})



