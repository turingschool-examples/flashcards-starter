const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('object', card)        

    it('should be a function', function () {
        expect(Turn).to.be.a('function');
    });

    it(`should be an instance of Turn with a player's guess and the current card`, function () {
        expect(turn).to.be.an.instanceof(Turn);
    }); 

    it(`should be able to return a player's guess`, function() {
        turn.returnGuess();
        expect(turn.guess).to.equal('object');
    });

    it('should be able to return the current card', function () {
        let returnedCard = turn.returnCard();

        expect(returnedCard).to.equal(card);
    });

    it(`should return true or false depending on the player's response`, function() {
        let evaluatedGuess = turn.evaluateGuess();

        expect(evaluatedGuess).to.equal(true);
    });

    it(`should return a message based on player's response`, function() {
        let feedback = turn.giveFeedback();

        expect(feedback).to.equal(`correct!`);
    })
});