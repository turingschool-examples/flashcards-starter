const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Turn', function() {
  let card;
  let turn;
  beforeEach((done) => {
    card = prototypeQuestions[0];
    turn = new Turn('object', card);
    done();
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('be instantiated with a guess and a card', function() {
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.equal(card);
  });  

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal('object');
  });  

  it('should return the card', function() {
    expect(turn.returnCard()).to.deep.equal(card);
  });  

  it('should evaluate if answer is correct' , function() {
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should give feedback' , function() {
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('correct!');
  });
  
});