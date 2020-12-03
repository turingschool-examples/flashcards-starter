'use strict'

const chai = require('chai')
const expect = chai.expect

const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Deck', function () {

  it('should be a function', function () {
    expect(Deck).to.be.a('function')
  })

  it('should be an instance of Deck', function () {
    const deck = new Deck()
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should have an array of cards', function () {
    const deck = new Deck()
    const card1 = new Card(1, 'What is my name', ['Elsa', 'Matt', 'Gonzo'], 'Elsa')
    const card2 = new Card(2, 'What is your name', ['Elsa', 'Matt', 'Gonzo'], 'Matt')
    deck.createDeck(card1)
    deck.createDeck(card2)
    expect(deck.currentDeck).to.be.an('array')
    expect(deck.currentDeck[0]).to.deep.equal(card1)
    expect(deck.currentDeck[1]).to.deep.equal(card2)
  })

  it('should know how many cards there are', function () {
    const card = new Card(1, 'What is my name', ['Elsa', 'Matt', 'Gonzo'], 'Elsa')
    const deck = new Deck()
    deck.createDeck(card)
    expect(deck.countCards()).to.equal(1)
    const card1 = new Card(1, 'What is my name', ['Elsa', 'Matt', 'Gonzo'], 'Elsa')
    deck.createDeck(card1)
    expect(deck.countCards()).to.equal(2)
  })

})