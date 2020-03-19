const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');

describe('Deck', function() {

  let card1;
  let card6;
  let card13;
  let deck;

  beforeEach(function() {

    card1 = {
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }
    card6 = {
      "id": 6,
      "question": "What is an example of a mutator method?",
      "answers": ["sort()", "map()", "join()"],
      "correctAnswer": "sort()"
    }
    card13 = {
      "id": 13,
      "question": "The callback function for map() returns a modified version of the current element.",
      "answers": ["true", "false"],
      "correctAnswer": "true"
    }
    deck = new Deck([card1, card6, card13])
  })

  it('should be a function', function() {

    expect(Deck).to.be.a('function');
  })

  it('should be an instance of a Deck', function() {

    expect(deck).to.be.an.instanceof(Deck);
  })

  it('should take an array of cards', function() {

    expect(deck.cards.length).to.equal(3)
  })

  it('should be able to count how many cards it has', function() {

    expect(deck.countCards()).to.equal(3)
  })

  it('should know the details of the cards it has', function() {

    expect(deck.cards[0].id).to.equal(1)
    expect(deck.cards[1].id).to.equal(6)
    expect(deck.cards[2].correctAnswer).to.equal('true')
    expect(deck.cards[0].answers).to.deep.equal(['object', 'array', 'function'])
  })
})
