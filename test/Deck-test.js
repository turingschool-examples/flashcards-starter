const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck()

    expect(Deck).to.be.a('function');
  })

  it('should be an instance of a Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should take an array of cards', function() {
    const card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?',
      ['sort()', 'map()', 'join()'], 'sort()')
    const card13 = new Card(13,
      'The callback function for map() returns a modified version of the current element.',
      ['true', 'false'], 'true' )
    const deck = new Deck([card1, card6, card13])

    expect(deck.cards.length).to.equal(3)
  })

  it('should be able to count how many cards it has', function() {
    const card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?',
      ['sort()', 'map()', 'join()'], 'sort()')
    const deck = new Deck([card1, card6])

    expect(deck.countCards()).to.equal(2)
  })

  it('should know the details of the cards it has', function() {
    const card1 = new Card(1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?',
      ['sort()', 'map()', 'join()'], 'sort()')
    const card13 = new Card(13,
      'The callback function for map() returns a modified version of the current element.',
      ['true', 'false'], 'true' )
    const deck = new Deck([card1, card6, card13])

    expect(deck.cards[0].id).to.equal(1)
    expect(deck.cards[1].id).to.equal(6)
    expect(deck.cards[2].correctAnswer).to.equal('true')
    expect(deck.cards[0].answers).to.deep.equal(['object', 'array', 'function'])
  })
})
