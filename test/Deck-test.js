const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');


describe('Deck', () => {
  let deck;

  beforeEach(() => {
    card = new Card(1, 'What is 1 + 1 ?', ['2', '3', '4'], '2');
    card2 = new Card(2, 'What is 2 + 2 ?', ['2', '3', '4'], '4');
    deck = new Deck()

  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function')
  })

})
