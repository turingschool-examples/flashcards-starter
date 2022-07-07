const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
    let card;
    let turn;
    this.beforeEach(() => {
        card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        turn = new Turn("object", card);

    })

    it('should be a function', function () {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function () {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should take in a users guess to a question', function () {
        expect(turn.guess).to.be.a("string");
        expect(turn.guess).to.equal("object");
    })

    it('should know the current card being played', function () {
        expect(turn.currentCard).to.equal(card);
    })

    it('should be able to return the users guess', function() {
        let guess = turn.returnGuess();
        expect(guess).to.equal("object");
    });

    it('should be able to return the users card', function () {
        let returnedCard = turn.returnCard();
        expect(returnedCard).to.equal(card);
    });

    it('should determine if the users guess matches the correct answer on the card', function() {
        let evaluateGuess = turn.evaluateGuess();
        expect(evaluateGuess).to.equal(true);
    });

    it('should tell the user of their guess is correct or incorrect', function () {
        let feedback = turn.giveFeedback();
        expect(feedback).to.equal("correct");
    });
});
