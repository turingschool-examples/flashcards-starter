const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card')

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn
    expect(Turn).to.be.a('function')
  });
  
  it('should take in two arguments', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    const turn = new Turn('object', card.id)
    expect(turn.guess).to.equal('object');
    
  })

  it('should have a returnGuess method that returns the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    var guess = turn.returnGuess()
    expect(guess).to.equal('object')
  } )

  it('Should have returnCard method that returns the card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    var returnedCard = turn.returnCard()
    expect(returnedCard).to.deep.equal(card)
  })

  it('Should have a method that determines if guess is correct via boolean', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card)

    var guess = turn.returnGuess()
    var result1 = turn.evaluateGuess(guess)
    expect(result1).to.equal(true)

  })

})
// describe('Card', function () {

//   it('should be a function', function () {
//     const card = new Card();
//     expect(Card).to.be.a('function');
//   });
