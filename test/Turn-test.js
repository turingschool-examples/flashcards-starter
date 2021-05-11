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
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should store a user\'s guess', function() {
    const turn = new Turn('bracket notation');
    expect(turn.userGuess).to.equal('bracket notation');
  })

  it('should store the current card in play', function() {
    const card = new Card((5, 'Who teaches mod 2?', ['Heather', 'Jeff', 'Nik'], 'Nik'));
    const turn = new Turn('Heather', card);
    expect(card).to.be.an.instanceof(Card);
    //Does this need to deep equal or regular equal?
    expect(turn.currentCard).to.deep.equal(card);
  })

  it('should return the user\'s guess', function() {
    const card = new Card((7, 'Which datatype is wrapped in quotes?', ['string', 'number', 'boolean'], 'string'));
    const turn = new Turn('boolean', card);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('boolean');
  })

  it('should return the current card', function() {
    const card = new Card((9, 'What does 0 evaluate to be?', ['truthy', 'falsy', 'undefined'], 'falsy'));
    const turn = new Turn('truthy', card);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(card)
  })

  //Check if false boolean below
  it('should evaluate the user\'s incorrect guess against the correct answer', function() {
    const card = new Card((11, 'Which operator checks if two or more conditions evaluate to truthy?', ['||', '>=', '&&'], '&&'));
    const turn = new Turn('>=', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false)
  })
//Check if true boolean below - edit if before each doesnt work
  it('should evaluate the user\'s correct guess against the correct answer', function() {
    const card = new Card((11, 'Which operator checks if two or more conditions evaluate to truthy?', ['||', '>=', '&&'], '&&'));
    const turn = new Turn('&&', card);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true)
  })
})
