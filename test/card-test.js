const chai = require('chai');
const expect = chai.expect;

const { createCard,evaluateGuess,createDeck} = require('../src/card');

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

describe('turn', function(){
  it('should be a function', function(){
    expect(evaluateGuess).to.be.a('function')
  });
  it('should be able to evaluate if a guess is correct',function(){
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = evaluateGuess ('object',card)
  expect(turn).to.equal('correct')
})

it('should be able to evaluate if a guess is incorrect',function(){
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const turn = evaluateGuess ('array',card);
  expect(turn).to.equal('incorrect')
})
})

describe('deck', function(){
it('should be a function',function(){
  expect(createDeck).to.be.a('function')
});
it('should have multiple cards', function(){
  const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
const deck = createDeck(card1, card2, card3);

expect(deck).to.deep.equal([{id:1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'],correctAnswer: 'sea otter'},{id:14, question:'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'},
{id:12, question:'What is Travis\'s middle name?', answers:['Lex', 'William', 'Fitzgerald'], correctAnswer:'Fitzgerald'}])

})
})

describe('round', function(){
  it('should be a function',function(){
    expect(createRound).to.be.a('function')
  });
  it('should have a deck object', function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = createDeck([card1, card2, card3]);

    const round = createRound(deck);
    expect(round.deck).to.deep.equal(deck)
  })
})