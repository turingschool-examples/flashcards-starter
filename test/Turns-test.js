const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turns');


describe('Turn', () => {
    
    it('should be a function', () => {
      let turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        let turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
      }); 

    it('should return a guess', () =>{
        let card = new Card(1, 'whats my name', ['john' ,'katie','joe'],'john')
        let turn = new Turn('joe',card)
        expect(turn.returnGuess()).to.equal('joe')
    })

    it('should return a card', () =>{
        let card = new Card(2, 'whats my name?', ['john' ,'katie','joe'],'john')
        let turn = new Turn('john',card)
        expect(turn.returnCard()).to.equal(turn.newCard)
    })

    it('should evaluate guess to be false', () =>{
        let card = new Card(2, 'whats my name?', ['john' ,'katie','joe'],'john')
        let turn = new Turn('joe',card)
        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('should give feed back', () =>{
        let card = new Card(2, 'whats my name?', ['john' ,'katie','joe'],'john')
        let turn = new Turn('joe',card)
        expect(turn.giveFeedback()).to.equal('incorrect!')
    })

})