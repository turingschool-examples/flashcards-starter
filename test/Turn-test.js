const chai = require('chai')
const expect = chai.expect

const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe('Turn', function() {
  
  it('should be a function', function() {
    const card = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    const turn = new Turn('callback function', card)
    expect(Turn).to.be.a('function')
  })

  it('should be able to store a user\'s guess', function() {
    const card = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    const turn = new Turn('current element', card)
    
    expect(turn.guess).to.equal('current element')
    // expect(turn.returnGuess()).to.equal('current element')
  })
 
  it('should be able to store current card in deck', function() {
    const card = new Card(1, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
    const turn = new Turn('current element', card)

    expect(turn.card).to.equal(card)
  })
})
  

