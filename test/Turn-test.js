const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Turn', function() {
  let card, turn;
  beforeEach( () => {
    card = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });

    turn = new Turn('object', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the user\'s guess', () => {
    
    expect(turn.guess).to.equal('object');
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return a card', () => {

    expect(turn.returnCard()).to.equal(turn.card)
  });

  it('should evaluate guess', () => {
    expect(turn.evaluateGuess()).to.equal(true)
  });

  it('should provide feedback', () => {
    expect(turn.giveFeedback()).to.equal('Correct!')
  });


});