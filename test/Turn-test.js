const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
describe('Turn', function() {
  beforeEach((done) => {
    turn = new Turn();
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    done();
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return a guess', function() {
    expect(turn.returnGuess('object')).to.equal('object');
  });  

  it('should return the card', function() {
    expect(turn.returnCard(card)).to.deep.equal(card);
  });  

  it('should evaluate if answer is correct' , function() {
    expect(turn.evaluateGuess('object', card)).to.equal(true);
  });

  it('should give feedback' , function() {
    guess = turn.evaluateGuess('object', card);
    expect(turn.giveFeedback(guess)).to.equal('correct!');

    guess = turn.evaluateGuess('array', card);
    expect(turn.giveFeedback(guess)).to.equal('incorrect!');
  });
  
});