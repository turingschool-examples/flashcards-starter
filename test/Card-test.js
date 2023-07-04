const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turn', function() {
  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should help evaluate a turn, by evaluating if a guess is correct or not', function() {
    var turn = evaluateGuess('object', 'object');

    expect(turn).to.equal('correct!')
  })
})

describe('deck', function() {
  it('should create a function', function() {
    expect(createDeck).to.be.a('function');
  });
  it('should be created with an array of card objects', function() {
    var card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    var card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    var card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')

    var deck = createDeck([card1, card2, card3])
    expect(deck).to.equal(deck)
  })
})