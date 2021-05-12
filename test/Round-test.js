const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");
const Round = require("../src/Round.js");

const chai = require("chai");
const expect = chai.expect;

let card1, card2, card3, cards, deck, round
//make sure youre looking at all the files including the freebies that came with repo
beforeEach( () => {
  card1 = new Card(6, 'What is an example of a mutator method?',["sort()", "map()", "join()"], "sort()");
  card2 = new Card(8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function")
  card3 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
  cards = [card1, card2, card3]
  deck = new Deck(cards)
  round = new Round(deck)
})

describe('Round', () => {

  it.only("should instantiate a Round", () => {

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