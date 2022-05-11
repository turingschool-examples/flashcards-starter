const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn',() => {
    let card, turn;

    beforeEach(() => {
         card = new Card(
            1,
            "What allows you to define a set of related information using key-value pairs?",
            ["object", "array", "function"],
            "object"
          )
          turn = new Turn('object', card);
    });

    it('should be a function',() => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn',() => {
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it('should store a players guess',() => {
        expect(turn.playerGuess).to.equal('object');
    } )

    it('should store a card',() => {
        expect(turn.currentCard).to.equal(card);
    } )

    it('should return a players guess',() => { 
        turn.returnGuess();
        expect(turn.playerGuess).to.equal('object');
    })

    it('should return a card',() => { 
        turn.returnCard();
        expect(turn.currentCard).to.equal(card);
    })

    it('should evaluate if the players guess matches the correct answer',() => {
        turn.evaluateGuess();
        expect(turn.evaluateGuess()).to.equal(true);
    })

    it('should evaluate if the players guess is incorrect',() => {
        turn = new Turn('array', card);
        turn.evaluateGuess();
        expect(turn.evaluateGuess()).to.equal(false);
    })

    it('should return a message if players guess is correct',() => {
        turn.giveFeedback();
        expect(turn.giveFeedback()).to.equal(`Correct!`);
    })

    it('should return a message if players guess is incorrect',() => {
        turn = new Turn('array', card);
        turn.giveFeedback();
        expect(turn.giveFeedback()).to.equal(`Incorrect!`);
    })  
})