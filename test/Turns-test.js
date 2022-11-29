const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turns');


describe('Turn', function(){
    let turn;
    let card;

    beforeEach(() => {
        card = new Card(
            1,
            "What allows you to define a set of related information using key-value pairs?",
            ["object", "array", "function"],
            "object"
        );
        turn = new Turn ('object', card)
    })

    it('should be an instance of Turn', () =>  {
        expect(turn).to.be.an.instanceOf(Turn);
    })

    it("should be an instance of Turn", () => {
        expect(Turn).to.be.a("function")
    })

    it('should be able to store a guess', () =>  {
        expect(turn.guess).to.equal('object')
    })

    it('should be able to store a card', () =>  {
        expect(turn.newCard).to.equal(card)
    })

    it("should return the guess", () => {
        expect(turn.returnGuess()).to.equal("object");
      });

      it("should return the card", () => {
        expect(turn.returnCard()).to.equal(card);
      });

      it("should evalutate guess", () => {
        expect(turn.evaluateGuess()).to.equal(true)
      })

      it("should give feedback after guess was correct", () => {
        expect(turn.giveFeedback()).to.equal("Correct!")
      })
      it("should give feedback after guess was incorrect", () => {
        turn = new Turn('testing', card)
        expect(turn.giveFeedback()).to.equal("Incorrect!")
      })

})