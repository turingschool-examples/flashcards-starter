const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  var card;
  beforeEach(() => {
    card = new Card(1, 
      'How do you define sets of related info with key-value pairs?', 
      ['object', 'array', 'function'], 
      'object'
    );
  });
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should be able to return a user's guess", () => {
    const turn = new Turn('Is it option A?');
    const guess = turn.returnGuess();
    expect(guess).to.equal('Is it option A?');
  });
    
  it('it should be able to return the current card', () => {
    const turn = new Turn('Is it option A?', card);
    const turnCard = turn.returnCard(); 
    expect(turnCard).to.deep.equal(card);
  });

  it("should be able to tell if the user's guess is correct", () => {
    const turn = new Turn('Is  it option A?', card);
    const incorrectAnswer = turn.evaluateGuess(); 
    expect(incorrectAnswer).to.equal(false);
    const turnTwo = new Turn('object', card);
    const correctAnswer = turnTwo.evaluateGuess();
    expect(correctAnswer).to.equal(true);
  });

  it('should be able to say "incorrect!" and "correct!"' + 
  'depending on whether the user\'s guess is correct', () => {
    const turn = new Turn('Is it option A?', card);
    const response = turn.giveFeedback();
    expect(response).to.equal('incorrect!');
    const turnTwo = new Turn('object', card);
    const responseTwo = turnTwo.giveFeedback();
    expect(responseTwo).to.equal('correct!');
  });

});