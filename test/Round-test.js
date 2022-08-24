const chai = require("chai");
const expect = chai.expect;

const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const { prototypeData } = require("../src/data");

describe('Round', () => {
  it('should be a function', () => {
    expect(Round).to.be.a('function')
  })

  it('should be instantiated with a deck of cards', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck.cardsInDeck)
    expect(round.deck).to.deep.equal([card1, card2])
  })

  it('should have a default turn count of 0', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck.cardsInDeck)
    expect(round.turn).to.equal(0)
  })

  it('should return the current card being played', () => {
    const card1 = new Card(1, 'What color is the sky', ['blue', 'green', 'red'], 'blue')
    const card2 = new Card(2, 'What is 2 + 2', ['22', '4', '0'], '4')
    const deck = new Deck([card1, card2])
    const round = new Round(deck.cardsInDeck)
    round.returnCurrentCard()
    expect(round.deck[0]).to.equal(card1)
  })

  // it('should create a new instance of turn when a guess is made', () => {
    
  // })
})


//guess is made new turn instance is created


//turn count is increased

//the next card becomes current card

//guess is evaluated/recorded

//incorrect guess is stored by ID in incorrectGuess array

//feedback is returned on if guess is correct or not
