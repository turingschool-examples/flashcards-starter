const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;

  beforeEach(() => {
    turn = new Turn('object', new Card(prototypeQuestions[0]));
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should have a guess', () => {
    expect(turn.guess).to.equal('object');
  });

  it('should have an instance of card', () => {
    expect(turn.card).to.be.an.instanceOf(Card);
    expect(turn.card).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });

  it('should return the guess', () => {
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card', () => {
    expect(turn.returnCard()).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });

  it('should check if guess matches answer', () => {
    expect(turn.evaluateGuess()).to.equal(true);

    turn.guess = 'array';

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback if the answer is right or wrong', () => {
    expect(turn.giveFeedBack()).to.equal('correct!');

    turn.guess = 'array';

    expect(turn.giveFeedBack()).to.equal('incorrect!');
  });
});