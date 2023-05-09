const chai = require('chai')
const expect = chai.expect

const {createDeck, countCards} = require('../src/deck')
const { createCard } = require('../src/card')

describe('createDeck', function() {
  it('should be a function', function() {
    expect(createDeck).to.be.a('function')
  })
  it('should create a deck containing all the cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    expect(deck).to.be.deep.equal([card1, card2, card3])
  })

})

describe('countCards', function() {
  it('should be a function', function() {
    expect(countCards).to.be.a('function')
  })
  it('should count the number of cards in a deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = createDeck([card1, card2, card3]);
    numberOfCards = countCards(deck)
    expect(numberOfCards).to.be.equal(3)
  })
})