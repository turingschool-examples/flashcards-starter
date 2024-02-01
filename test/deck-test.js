const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard, evaluateGuess } = require('../src/card');

describe('deck', function() {
    it('should be a function', function() {
    expect(createDeck).to.be.a('function');
    })

    it('should create a deck of cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = createDeck([card1, card2])
    expect(deck[0]).to.deep.equal(card1)
    expect(deck[1]).to.deep.equal(card2)
    expect(deck).to.deep.equal([card1, card2])
    })

    it('should count the number of cards in a deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = createDeck([card1, card2])
    const numOfCards = countCards(deck);
    expect(numOfCards).to.equal(2)
    })
})




  