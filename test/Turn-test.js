const chai = require('chai');
const expect = chai.expect;
const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe ('Turn', () => {

    it('should be a function', () => {
        expect(Turn).to.be.a('function')
    })

    it('should be an instance of Turn', () => {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn)
    }) 

    it(`should be able to take a user's guess as a string`, () => {
        const turn = new Turn('object')
        expect(turn.input).to.equal('object')
    })

    it('should be able to create a new instance of Card in play', () => {
        const turn = new Turn('object', new Card())
         console.log(turn.card)
        expect(turn.card).to.be.an.instanceOf(Card)
    })

    it(`should return the user's guess with a function`, () => {
        const turn = new Turn('object', Card)
        expect(turn.returnGuess()).to.equal(turn.input)
    })

    it('should be able to return the Card instance with a function', () => {
        const turn = new Turn('object', 1, 'hello', ['dog', 'cat'], 'dog') // test
        console.log(turn.card)
        expect(turn.returnCard()).to.equal(turn.card)
    })

    it('should evaluate guess with a function', () => {
        const turn = new Turn('object', Card)
        expect(turn.evaluateGuess()).to.equal(true)
    })

    it('should give feedback with a function', () => {
         const turn = new Turn('object', Card)
        expect(turn.giveFeedback()).to.equal('Incorrect!')
    })

})