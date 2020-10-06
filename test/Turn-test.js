const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  })
  it('should be an instance of Turn', function() {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  })

  it('should be able to accept a guess', function() {
    const turn = new Turn('lion');

    const newTurn = new Turn('tiger');

    expect(turn.guess).to.be.a('string');
    expect(newTurn.guess).to.be.a('string');
  })

  it('should have an instance of card to play', function() {
    const newCard = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');

    const turn = new Turn('lion', newCard)

    expect(turn.card).to.be.an.instanceof(Card);
  })

  it('should be able to return a guess', function() {
    const newCard = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');

    const turn = new Turn('lion', newCard);

    turn.returnGuess();

    expect(turn.guess).to.be.a('string');
  })

  it('should be able to return a card', function() {
    const newCard = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const turn = new Turn('lion', newCard);

    turn.returnCard();

    expect(turn.card).to.be.an.instanceof(Card);
  })

  it('should be able to evaluate a guess', function() {
    const newCard = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const turn = new Turn('lion', newCard);
    const newTurn = new Turn('panda', newCard);

    turn.evaluateGuess();
    newTurn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
    expect(newTurn.evaluateGuess()).to.equal(true);
  })

  it('should return \'incorrect!\' if the guess is incorrect', function() {
    const newCard = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const turn = new Turn('lion', newCard);

    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  })

  it('should return \'correct!\' if the guess is correct', function() {
    const newCard = new Card(1, 'What is Cooper\'s favorite animal?', ['lion', 'giraffe', 'panda'], 'panda');
    const turn = new Turn('panda', newCard);

    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('correct!');
  })
})
