const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');
const Turn = require("../src/Turn.js");

const chai = require('chai');
const expect = chai.expect;

let card1, card2, card3, cards, deck, round
//make sure youre looking at all the files including the freebies that came with repo
beforeEach( () => {
  card1 = new Card(6, 'What is an example of a mutator method?',['sort()', 'map()', 'join()'], 'sort()');
  card2 = new Card(8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
  card3 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
  cards = [card1, card2, card3]
  deck = new Deck(cards)
  round = new Round(deck)
})

describe('Round', () => {

  it.only('should instantiate a Round', () => {

    expect(round).is.an.instanceOf(Round);
  })

  it.only('should store deck', () => {

    expect(round.deck).to.equal(deck)
  })

  it.only('should have a default turn count of 0', () => {

    expect(round.turns).to.equal(0)
  })

  it.only('should have a current card that is first card in deck', () => {

    expect(round.currentCard).to.equal(round.deck.cards[0])
  })

  it.only('should store incorrect guesses in array', () => {

    expect(round.incorrectGuesses).to.deep.equal([])
  })
})

describe('returnCurrentCard', () => {

  it.only('should be a method', () => {

    expect(round.returnCurrentCard).to.be.a('function')
  })

  it.only('should return the current card being played', () => {

    expect(round.returnCurrentCard()).to.equal(round.currentCard)
  })
})

describe('takeTurn', () => {

  it.only('should be a method', () => {

    expect(round.takeTurn).to.be.a('function')
  })

  it.only('should update turn count', () => {

    round.takeTurn()

    expect(round.turns).to.equal(1)
  })
  it.only('should evalute guess', () => {
    /*it should evalute guess
    how does it evalute the guesses? in the turn class
    >>> turn.guess ==== this.card.correctAnswer ? true : false
    method should call turn.evaluteGuess()
    */
    let turn = new Turn()
   round.takeTurn()

   expect(round.takeTurn()).to.equal(turn.evaluteGuess)
  })
})