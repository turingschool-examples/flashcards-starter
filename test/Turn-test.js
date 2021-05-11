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
    const card = new Card((5, 'Who teaches mod 2?', ['Heather', 'Kayla', 'Hannah', 'Nik'], 'Nik'));
    const turn = new Turn('Heather', card);
    expect(card).to.be.an.instanceof(Card);
    //Does this need to deep equal or regular equal?
    expect(turn.currentCard).to.deep.equal(card);
  })
})
