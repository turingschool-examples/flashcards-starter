const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
    let card;

    beforeEach(() => {
        card = new Card(1, 'What color is an orange?', ['blue', 'orange', 'red'], 'orange');
    });

    it('should take a user\'s guess and a Card as an argument', () => {
        const turn = new Turn('orange', card);

        expect(turn.guess).to.equal('orange');
        expect(turn.card.id).to.equal(1);
        expect(turn.card.question).to.equal('What color is an orange?');
        expect(turn.card.answers).to.deep.equal(['blue', 'orange', 'red']);
        expect(turn.card.correctAnswer).to.equal('orange');
        
    })

    it('should be able to return the guess', () => {
        const turn = new Turn('orange', card);
        
        expect(turn.returnGuess()).to.equal('orange');
    })

    it('should be able to return the Card', () => {
        const turn = new Turn('orange', card);

        expect(turn.returnCard()).to.deep.equal( { id: 1, question: 'What color is an orange?', answers: ['blue', 'orange', 'red'], correctAnswer: 'orange'});
    })

    it('should be able to evaluate the guess when the answer is correct', () => {
        const turn = new Turn('orange', card);

        expect(turn.evaluateGuess()).to.equal(true)
    })

    it('should be able to evaluate the guess when the answer is incorrect', () => {
        const turn = new Turn('blue', card);

        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('should be able to give feedback when the answer is correct', () => {
        const turn = new Turn('orange', card);

        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal('Correct! 😎');
    })

    it('should be able to give feedback when the answer is incorrect', () => {
        const turn = new Turn('blue', card);

        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal('Incorrect! 🙁');
    })

})



