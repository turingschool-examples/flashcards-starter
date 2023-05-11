const chai = require('chai');
const expect = chai.expect;

const {createDeck, countDeck,} = require('../src/deck');
const { createCard } = require('../src/card');


describe('create deck', function() {
  it('should be a function', function (){
    expect(createDeck).to.be.a('function')
  })
  it('should be able to create a deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal',
     ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?',
     ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?',
     ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
     expect(createDeck([card1,card2,card3])).to.deep.equal([card1,card2,card3])
  })
})

describe('count deck', function() {
  it('should be a function', function (){
    expect(countDeck).to.be.a('function')
  })
  it('should be able to count cards', function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal',
    ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s middle name?',
    ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = createDeck([card1,card2,card3])
  expect(countDeck(deck)).to.equal(3)
  })
})