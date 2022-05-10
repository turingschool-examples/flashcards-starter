const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {

    it('should be a function', function () {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function () {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn)
    });

    it('should store user guess as a string', function () {
        const turn = new Turn('Alex Trebek')
        expect(turn.guess).to.equal('Alex Trebek')
    });

    it('should store the current Card object', function () {
        const card = new Card()
        const turn = new Turn('Frog', card)
        expect(turn.card).to.be.an.instanceof(Card)
    });

    it('should return user guess', function () {
        const card = new Card()
        const turn = new Turn('Delaware', card)

        turn.returnGuess()

        expect(turn.returnGuess()).to.equal('Delaware')
    });

    it('should return the current Card object', function () {
        const card = new Card()
        const turn = new Turn('Comptroller', card)

        turn.returnCard()

        expect(turn.returnCard()).to.equal(card)
    });

    it('should return a boolean indicating if the answer is correct', function () {
        const card = new Card(1,'What color is the daytime sky?',['blue', 'chartreuse','black'],'blue')
        const turn = new Turn('blue', card)
        //happy
        expect(turn.evaluateGuess()).to.equal(true)
    });

    it('should return a boolean indicating if the answer is incorrect', function () {
        const card = new Card(1,'What color is the daytime sky?',['blue', 'chartreuse','black'],'blue')
        const turn = new Turn('black', card)
        //sad
        expect(turn.evaluateGuess()).to.equal(false)
    });

    it('should return "correct!" on a correct guess', function () {
        const card = new Card(1,'What color is the daytime sky?',['blue', 'chartreuse','black'],'blue')
        const turn = new Turn('blue', card)
        //:)
        turn.evaluateGuess()

        expect(turn.giveFeedback()).to.equal('correct!')
    });

    it('should return "incorrect!" on a incorrect guess', function () {
        const card = new Card(1,'What color is the daytime sky?',['blue', 'chartreuse','black'],'blue')
        const turn = new Turn('black', card)
        //:(
        turn.evaluateGuess()

        expect(turn.giveFeedback()).to.equal('incorrect!')
    });
});