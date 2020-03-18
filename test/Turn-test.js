const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of a Turn', function() {
    const turn = new Turn();

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
    const card = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object');
    const turn = new Turn('guess', card)

    expect(card).to.be.an.instanceof(Card);
    expect(card.id).to.equal(1);
    expect(turn.card.id).to.equal(1);
    expect(turn.card.correctAnswer).to.equal('object')
  })

  it('should return the users guess', function() {
    const card = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object');
    var guess = 'brocolli';
    var guess2 = 'mythical creatures'
    const turn = new Turn(guess, card);
    const turn2 = new Turn(guess2, card);

    expect(turn.returnGuess()).to.equal('brocolli');
    expect(turn2.returnGuess()).to.equal('mythical creatures')
  })

  it('should return the card', function() {
    const card = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object');
    const card2 = new Card(2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'], 'array');
    const turn = new Turn('none', card);
    const turn2 = new Turn('nothing', card2)

    expect(turn.returnCard()).to.deep.equal({id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'], correctAnswer: 'object'})
    expect(turn2.returnCard()).to.deep.equal({id: 2,
      question: 'What is a comma-separated list of related values?',
      answers: ['array', 'object', 'function'], correctAnswer: 'array'})
  })

  it('should evaluate if the guess is true or false', function() {
    const card = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    const turn2 = new Turn('function', card);
    const turn3 = new Turn('object', card);

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(false);
    expect(turn3.evaluateGuess()).to.equal(true);
  })

  it('should give feedback on guess', function() {
    const card = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    const turn2 = new Turn('function', card);
    const turn3 = new Turn('object', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
    expect(turn3.giveFeedback()).to.equal('correct!')
  })

  it('should give feedback on all guesses', function() {
    const card = new Card(2,
      'What is a comma-separated list of related values?',
      ['array', 'object', 'function'], 'array');
    const turn = new Turn('array', card);
    const turn2 = new Turn('function', card);
    const turn3 = new Turn('object', card);

    expect(turn.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
    expect(turn3.giveFeedback()).to.equal('incorrect!')

  })



})
