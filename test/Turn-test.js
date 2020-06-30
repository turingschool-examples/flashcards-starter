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
    expect(turn.cardID).to.equal(1)
  })

  it('should have a returnGuess method that returns the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card.id)

    var guess = turn.returnGuess()
    expect(guess).to.equal('object')
  } )

})
// describe('Card', function () {

//   it('should be a function', function () {
//     const card = new Card();
//     expect(Card).to.be.a('function');
//   });
