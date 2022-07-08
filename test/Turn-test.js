const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data');

describe('Turn', function() {

  let card;

  beforeEach(function() {
    card = new Card(data.prototypeData[0].id, data.prototypeData[0].question, data.prototypeData[0].answers, data.prototypeData[0].correctAnswer);
  })

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take in a string that represents a user\'s guess as an argument', function() {
    const turn = new Turn('object');

    expect(turn.guess).to.equal('object');
  });

  it('should take in a card object as a second argument', function() {
    const turn = new Turn('object', card);

    expect(turn.card).to.equal(card);
  });

  it('should be able to return the user\'s guess', function() {
    const turn = new Turn('object', card);
    const guess = turn.returnGuess();

    expect(guess).to.equal('object');
  });

  it('should be able to return the current card', function() {
    const turn = new Turn('object', card);
    const currentCard = turn.returnCard();

    expect(currentCard).to.equal(card);
  });

  it('should be able to determine if the user\'s guess is true or false', function() {
    const turn = new Turn('array', card);
    const turn2 = new Turn('object', card);

    turn.evaluateGuess();
    expect(turn.isCorrect).to.equal(false);
    expect(turn.evaluateGuess()).to.equal(false);

    turn2.evaluateGuess();
    expect(turn2.isCorrect).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give the user feeback based on the accuracy of their guess', function() {
    const turn = new Turn('array', card);
    const turn2 = new Turn('object', card);

    turn.evaluateGuess();
    const result = turn.giveFeedback();
    expect(result).to.equal('Incorrect!');

    turn2.evaluateGuess();
    const result2 = turn2.giveFeedback();
    expect(result2).to.equal('Correct!');
  });

});