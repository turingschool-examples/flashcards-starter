const chai = require('chai');
const expect = chai.expect;
const Turn = require("../src/Turn");
const Card = require("../src/Card")

describe ('Turn', () => {

    it('should be a function', () => {

        expect(Turn).to.be.a('function')
    })

    it('should be an instance of Turn', () => {
        const turn = new Turn();

        expect(turn).to.be.an.instanceof(Turn)
    }) 

    it(`should be able to take a user's guess input as a string`, () => {
        const turn = new Turn('object')

        expect(turn.input).to.equal('object')
    })

    it('should be able to return the Card instance', () => {
        const card = new Card()
     
        expect(card).to.be.an.instanceof(Card)
    })

    it('should return the users guess with a function', () => {
        const turn = new Turn('object', Card)

        expect(turn.returnGuess).to.be.a('function')
    })

    it('should evaluate guess with a function', () => {
        const turn = new Turn('object', Card)

        expect(turn.evaluateGuess).to.be.a('function')

    })

    it('should give feedback with a function', () => {
         const turn = new Turn('object', Card)

        expect(turn.giveFeedback).to.be.a('function')
    })




})