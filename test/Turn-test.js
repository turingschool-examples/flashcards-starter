const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  //-----------test set-up
  let card;
  //change to correct/inncorrect guess for readability
  //guess1 is correct guess...
  let guess1;
  let guess2;
  //put turn 1 and 2 here...

  before(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    guess1 = 'object';
    guess2 = 'array';
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  //-----------default property tests
  //should store given guess.
  it('should store a guess', function() {
    const turn = new Turn(guess1);
    expect(turn.guess).to.equal(guess1);

    const turn2 = new Turn('array');
    expect(turn2.guess).to.equal('array');
  });  

  //should store given card
  it('should store a card', () => {
    const turn = new Turn(guess1, card);

    expect(turn.card).to.equal(card);
  });

  //-----------returnGuess() tests
  it('should return guess', () => {
    const turn = new Turn(guess1, card);

    const returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal(guess1);
  });

  //-----------returnCard() tests
  it('should return card', () => {
    const turn = new Turn(guess1, card);

    const returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  //-----------evaluateGuess() tests
  it('should evalutate guess to true or false', () => {
    const turn = new Turn(guess1, card);
    const turn2 = new Turn(guess2, card);

    //change evaluatedGuess to evaluatedGuess1
    const evaluatedGuess = turn.evaluateGuess();

    const evaluatedGuess2 = turn2.evaluateGuess();

    expect(evaluatedGuess).to.equal(true);

    expect(evaluatedGuess2).to.equal(false);
  })

  //-----------giveFeedback() tests
  it('should give feedback if guess is correct or incorrect', () => {
    const turn = new Turn(guess1, card);

    const feedback = turn.giveFeedback();

    expect(feedback).to.equal('correct!');

    const turn2 = new Turn(guess2, card);

    const feedback2 = turn2.giveFeedback();

    expect(feedback2).to.equal('incorrect!');
  });

});
