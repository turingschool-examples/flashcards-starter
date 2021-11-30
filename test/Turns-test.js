const expect = require('chai').expect;
var Turns = require('../src/Turns');

describe('Turn', function() {
  it.only('should instatiate a turn', function() {
    let turn = new Turn()
    expect(turn).to.be.a('function');

    expect(turn).to.be.an.instaceOf('Turn')
  })
});
  // it.skip('should have a guess and a card' function() {
  //   let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  //   expect(card).to.be.an.instanceof(Card);
  //
  //   let turn = new Turn(userGuess, card);
  //   expect(turn).to.equal(userGuess, card)
  // })
