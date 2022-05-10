const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn;
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn;
    expect(turn).to.be.a.instanceof(Turn)
  });

  it('should store a guess', function() {
    const turn = new Turn('banana');
    expect(turn.guess).to.equal('banana')
  });

  it('should store any guess', function() {
    const turn = new Turn('tinfoil');
    expect(turn.guess).to.equal('tinfoil')
  });

  it('should store the current card in play', function() {
    const card = new Card(1, 'How many mates will a seahorse have in a lifetime?', ['one', 'as many as possible', 'none'], 'one')
    const turn = new Turn('banana', card)
    expect(turn.currentCard).to.equal(card)
  })
})
