const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turn = new Turn('object');
    expect(turn.guess).to.equal('object');

    const turn2 = new Turn('array');
    expect(turn2.guess).to.equal('array');
  });  

  //wording/ mythicals?
  // it('should be able to store a different guess value', function() {
  //   const turn = new Turn('object');
  //   expect(turn.guess).to.equal('object');

  //   const turn2 = new Turn('array');
  //   expect(turn2.guess).to.equal('array');
  // });  

  it('should store a card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn = new Turn('object', card);

    expect(turn.card).to.equal(card);
  });

  it('should return a guess', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    const turn = new Turn(guess, card);

    const returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal(guess);
  });

  it('should return a card', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess = 'object';
    const turn = new Turn(guess, card);

    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  it('should evalutate guess to true or false', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const guess1 = 'object';
    const turn = new Turn(guess1, card);

    const evaluatedGuess = turn.evaluateGuess();

    expect(evaluatedGuess).to.equal(true);

    const guess2 = 'array';
    const turn2 = new Turn(guess2, card);
    const evaluatedGuess2 = turn2.evaluateGuess();

    expect(evaluatedGuess2).to.equal(false);
  })

  it('should give feedback if guess is correct or incorrect', () => {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const guess1 = 'object';
    const turn = new Turn(guess1, card);

    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('correct!');


    const guess2 = 'array';
    const turn2 = new Turn(guess2, card);

    const feedback2 = turn2.giveFeedback();

    expect(feedback2).to.equal('incorrect!');
});

});
