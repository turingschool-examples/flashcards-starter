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

  it('should store a guess', function(){
    const turn = new Turn('foo');
    expect(turn.guess).to.equal('foo');
  });

  it('should store a card', function() {
    const card = new Card(1, 'Where is Turing Located?', 'Denver');
    const turn = new Turn('Denver', card);
    expect(turn.card).to.deep.equal(card);
  });

  it('should have a method to return guess', function() {
    const card = new Card(1, 'Where is Turing Located?', 'Denver');
    const turn = new Turn('Denver', card);
    expect(turn.returnGuess(), 'Denver');
  });

  it('should have a method to return card', function() {
    const card = new Card(1, 'Where is Turing Located?', ['Denver', 'Chicago', 'New York'], 'Denver');
    const turn = new Turn('Denver', card);
    expect(turn.returnCard(), {id: 1, question: 'Where is Turing Located?', answers: ['Denver', 'Chicago', 'New York'], correctAnswer: 'Denver'})
  });

  

});