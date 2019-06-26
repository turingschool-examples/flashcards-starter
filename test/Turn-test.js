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

  it('should return the guess', function(){
    
    const card = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method','accessor method','iteration method'],'mutator method');
    const turn = new Turn('mutator method', card);
    expect(turn.returnGuess()).to.equal('mutator method');
  });

  it('should return the card', function(){
    const card = new Card(14, 'Which iteration method can turn an array into a single value of any data type?', ['reduce()', 'map()', 'filter()'],'reduce()');
    const turn = new Turn('reduce()', card);
    expect(turn.returnCard()).to.deep.equal(card);
  });

  it('should return boolean if user matches the answer', function(){
    const card = new Card(16, 'What does the callback function for reduce() return?', ['the accumulator', 'the current element', 'the initializer'],'the accumulator');
    const turn = new Turn('the accumulator', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return either incorrect or correct based the guess is correct or not', function(){
    const card = new Card(11, 'Which iteration method returns a new array with all elements that match a given condition?', ['filter()', 'find()', 'map()'],'filter()');
    const turn = new Turn('filter()', card);
    expect(turn.giveFeedback()).to.equal('correct');
  });

});