const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function() {

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn);
    });

    it('should be about to make a guess to the question', function() {
        const turn = new Turn('');

        expect(turn.guess).to.equal('');
    });

    // it.skip('should have a current card in play', function() {
    //     const turn = new Turn('', Card{});

    //     expect(turn.cardInPlay).to.deepEqual(Card{});
    // });

    it.skip('should return a guess', function() {
        const turn = new Turn('');

        turn.returnGuess();
    });

    it.skip('should return the Card', function() {
        const turn = new Turn('');
        const card = new Card();

        turn.returnCard();
    });

    it.skip('should let user know if they answered the question correctly', function() {
        const turn = new Turn();
        const card = new Card();

        turn.evaluateGuess();

        expect(card.correctAnswer).to.equal(true);
    });

    it.skip('should let the user know if the guess is correct or not', function() {
        const turn = new Turn();
        const card = new Card();

        turn.giveFeedback();

        expect(turn.feedback).to.equal('incorrect!');
        expect(turn.feedback).to.equal('correct!');
    });
});