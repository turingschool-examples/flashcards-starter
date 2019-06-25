const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

   it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should return the guess', function(){
    
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method','accessor method','iteration method'],'mutator method');
    const turn = new Turn('mutator method',card);
    expect(turn.returnGuess()).to.equal('mutator method');
  });

  it.skip('should return the card', function(){
    const card = new Card(//id, 'question in a string','array of answers','correct answer');
    const turn = new Turn();
    expect(turn.returnCard()).to.deep.equal(//card#);
  });

  it.skip('should ', function(){
    const card = new Card();
    const turn = new Turn();
    expect(turn.returnGuess).to.equal(//string);
  });

  it.skip('should ', function(){
    const card = new Card();
    const turn = new Turn();
    expect(turn.returnGuess).to.equal(//string);
  });

    it.skip('should ', function(){
    const card = new Card();
    const turn = new Turn();
    expect(turn.returnGuess).to.equal(//string);
  });

});