const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Turn = require('../src/Turn')

describe('Turn Class', () => {

  it('should be a function', () => {
    const turn = new Turn()
    expect(Turn).to.be.a('function')
  })

  it('should be an instance of the Turn class', () => {
    const turn = new Turn()
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should store a users guess as a string', () => {
    const turn  = new Turn ('A throw away guess')
    expect(turn.guess).to.be.a('string')
  })
  
  it('should store any users guess as a string', () => {
    const turn  = new Turn ('Some other user guess')
    expect(turn.guess).to.equal('Some other user guess')
  })

  it('should store the current card as an object', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turn = new Turn ('The user guess', card32)
    expect(turn.currentCard).to.be.a('object')
  })

  it('should store any card as the current card', () => {
    const card32 = new Card (32, 'What year did BTS debut?', ['2012', '2013', '2014'], '2013')
    const turn = new Turn ('The user guess', card32)
    expect(turn.currentCard).to.deep.equal(card32)
  })

})