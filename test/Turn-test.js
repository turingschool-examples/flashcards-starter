const chai = require('chai');
const expect = chai.expect;
const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe ('Turn', () => {
    let turn
    let turn1
    let card1

    beforeEach(() => {
         turn = new Turn('object', card1)
         turn1 = new Turn('trampoline', card1)
         card1 = new Card(1, 'what uses curly braces?', ['array', 'object', 'trampoline'], 'object')
        
    })

    it(`should be able to take a user's guess as a string`, () => {
        expect(turn.input).to.equal('object')
    })

    it('should be able to create a new instance of Card in play', () => {
        expect(turn.card).to.be.an.instanceof(Card)
    })

    it(`should return the user's guess with a function`, () => {
        expect(turn.returnGuess()).to.equal(turn.input)
    })

    it('should be able to return the Card instance with a function', () => {
        expect(turn.returnCard()).to.equal(turn.card)
    })

    it('should evaluate if guess matches the correct answer', () => {
        expect(turn.evaluateGuess()).to.equal(true)
        expect(turn1.evaluateGuess()).to.equal(false)
    })

    it('should give CORRECT or INCORRECT feedback with a function', () => {
        turn.evaluateGuess()
        turn1.evaluateGuess()
        expect(turn.giveFeedback()).to.equal('Correct!')
        expect(turn1.giveFeedback()).to.equal('Incorrect!')
    })

})