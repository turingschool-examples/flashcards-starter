const chai = require('chai');
const expect = chai.expect;


const Card = require('../src/Card');
const Turn = require('../src/Turn');



describe('Turn', function() {

    let turn 
    let turn2
    let card

    beforeEach(() => {
        turn = new Turn("Morgan", card)
        turn2 = new Turn("Zoey", card)
        card = new Card(1, "What is my name?", ["Morgan", "Sassy", "Zoey"], "Morgan")
       
    });


    it('should be a function', function() {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
       expect(turn).to.be.an.instanceof(Turn);
    });

    it('should take a user/s guess', () => {
        expect(turn.userGuess).to.be.a('string');
        // expect(turn2.userGuess).to.equal('Zoey');
    });

    it('should return a user/s card', () => {
        expect(turn.returnCard()).to.equal(turn.card);
        // expect(turn2.returnCard()).to.equal(turn.card);

    });

    it('should evaluate guess', () => {
        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('should give the user/s feedback', () => {
        expect(turn.giveFeedback()).to.equal('CORRECT!!!');
        // expect(turn2.returnCard()).to.equal('Zoey)
    });


});






