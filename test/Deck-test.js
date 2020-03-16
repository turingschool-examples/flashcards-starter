const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck()

    expect(Deck).to.be.a('function');
  })

  it.skip('should be an instace of a Deck', function() {
    const deck = new Deck();

    expect(deck).to.be.an.instanceof(Deck);
  })

  it.skip('should take an array of cards', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')
    const card13 = new Card(13, 'The callback function for map() returns a modified version of the current element.', ['true', 'false'], 'true' )
    const deck =([card1, card6, card13])

    expect(deck.cards.length).to.equal(3)
  })

  it.skip('should be able to count how many cards it has', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')
    const deck =([card1, card6])

    expect(deck.countCards()).to.equal(2)
  })

  it.skip('should know the details of the cards it has', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const card6 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()')
    const card13 = new Card(13, 'The callback function for map() returns a modified version of the current element.', ['true', 'false'], 'true' )
    const deck = ([card1, card6, card13])

    expect(deck.cards[card1].id).to.equal(1)
    expect(deck.cards[card13].id).to.equal(13)
    expect(deck.cards[card6].correctAnswer).to.equal('true')
    expect(deck.cards[card1].answers).to.deep.equal(['object', 'array', 'function'])
  })
})
