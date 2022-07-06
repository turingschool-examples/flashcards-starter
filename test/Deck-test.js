const chai = require('chai');
const expect = chai.expect;
const Card = require("../src/Card");
const Deck = require("../src/Deck");

describe ('Deck', () => {
let deck
let card1
let card2
let card3

beforeEach(() => {
card1 = new Card()
card2 = new Card()
card3 = new Card()
deck = new Deck([card1, card2, card3])
})

it('shoud have an array of cards', () => {
    console.log(deck)
    expect(deck.deckOfCards).to.deep.equal([card1, card2, card3])
})

it('should know how many cards in the deck', () => {
    expect(deck.countCards()).to.equal(3)
})

})