const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a users guess', function() {
    const turn = new Turn('willow');
    expect(turn.guess).to.equal('willow');
  });

  it('should store a users card', function() {
    const card = new Card(1, 'What is Agnis\'s favorite tree', ['cherry', 'oak', 'hawthorne'], 'cherry');
    const turn = new Turn('oak', card);

    expect(turn.card).to.equal(card);
  });

  it('should return guess', function() {
    const card = new Card(1, 'What is Agnis\'s favorite tree', ['cherry', 'oak', 'hawthorne'], 'cherry');
    const turn = new Turn('cherry', card);

    const guess = turn.returnGuess();

    expect(guess).to.equal('cherry');
  });

  it('should return card', function() {
    const card = new Card(1, 'What is Agnis\'s favorite tree', ['cherry', 'oak', 'hawthorne'], 'cherry');
    const turn = new Turn('oak', card);

    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  it('should evaluate the guess', function() {
    const card = new Card(1, 'What is Agnis\'s favorite tree', ['cherry', 'oak', 'hawthorne'], 'cherry');
    const turn = new Turn('oak', card);

    const guessValuation = turn.evaluateGuess();

    expect(guessValuation).to.equal(false);
  });

  it('should give feedback about a correct guess', function() {
    const card = new Card(1, 'What is Doris\'s favorite tree', ['ash', 'maple', 'magnolia'], 'magnolia');
    const turn = new Turn('magnolia', card);

    const feedback = turn.giveFeedback();


    expect(feedback).to.equal('correct!');
  });

  it('should give feedback about an incorrect guess', function() {
    const card = new Card(1, 'What is Doris\'s favorite tree', ['ash', 'maple', 'magnolia'], 'magnolia');
    const turn = new Turn('ash', card);

    const feedback = turn.giveFeedback();


    expect(feedback).to.equal('incorrect!');
  });
});
