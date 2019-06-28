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
    const card = new Card({id:14, question:'Which iteration method can turn an array into a single value of any data type?', answers:['reduce()', 'map()', 'filter()'],correctAnswer:'reduce()'});
   
    const turn = new Turn('map()', card);

    expect(turn.returnCard()).to.deep.equal(card);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect');
 
  });

  it('should return boolean if user matches the answer', function(){
    const card = new Card({id:16, question:'What does the callback function for reduce() return?',answers: ['the accumulator', 'the current element', 'the initializer'],correctAnswer:'the accumulator'});
    const turn = new Turn('the accumulator', card);

    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return either incorrect or correct based the guess is correct or not', function(){
    const card = new Card({id:11, question:'Which iteration method returns a new array with all elements that match a given condition?', answers:['filter()', 'find()', 'map()'],correctAnswer:'filter()'});
    const turn = new Turn('filter()', card);

    expect(turn.giveFeedback()).to.equal('correct');
  });

});