const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function() {

  let card;
  let card2;
  let card3;
  let turn;
  let turn2;
  let turn3;

  beforeEach(function() {
    card = {
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }
    card2 = {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }
    card3 = {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }
    turn = new Turn('object', card);
    turn2 = new Turn('array', card2);
    turn3 = new Turn('object', card3);

  })

  it('should be a function', function() {

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {

    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a users guess', function() {
    const turn = new Turn('boolean!');
    const turn2 = new Turn('false');
    const turn3 = new Turn('31');
    const turn4 = new Turn('guess')

    expect(turn.guess).to.equal('boolean!');
    expect(turn2.guess).to.equal('false');
    expect(turn3.guess).to.equal('31');
    expect(turn4.guess).to.equal('guess')
  })

  it('should take a card', function() {
    const turn = new Turn('guess', card)

    expect(card.id).to.equal(1);
    expect(turn.card.id).to.equal(1);
    expect(turn.card.correctAnswer).to.equal('object')
  })

  it('should return the users guess', function() {
    var guess = 'brocolli';
    var guess2 = 'mythical creatures'
    const turn = new Turn(guess, card);
    const turn2 = new Turn(guess2, card);

    expect(turn.returnGuess()).to.equal('brocolli');
    expect(turn2.returnGuess()).to.equal('mythical creatures')
  })

  it('should return the card', function() {

    expect(turn.returnCard()).to.deep.equal({id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'], correctAnswer: 'object'})
    expect(turn2.returnCard()).to.deep.equal({id: 2,
      question: 'What is a comma-separated list of related values?',
      answers: ['array', 'object', 'function'], correctAnswer: 'array'})
  })

  it('should evaluate if the guess is true or false', function() {

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(true);
    expect(turn3.evaluateGuess()).to.equal(false);
  })

  it('should give feedback on guess', function() {

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('correct!');
    expect(turn3.giveFeedback()).to.equal('incorrect!')
  })

  it('should give feedback on all guesses', function() {

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('correct!');
    expect(turn3.giveFeedback()).to.equal('incorrect!');
  })

})
