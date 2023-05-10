const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess, createDeck, countDeck,
   createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?',
     ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('Turn', function() {
it('should be a function', function() {
  expect(evaluateGuess).to.be.a('function')
})
it('should take a turn and return correct!', function() {
  const result = evaluateGuess("object", "object")

  expect(result).to.equal('correct!')
})
it('should take a turn and return incorrect!', function() {
  const result = evaluateGuess("array", "object")

  expect(result).to.equal('incorrect!')
})
})

describe('create deck', function() {
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

describe('create round', function() {
 it('should be able to create a round', function(){
  const card1 = createCard(1, 'What is Robbie\'s favorite animal',
   ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = createCard(14, 'What organ is Khalid missing?',
   ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?',
   ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  const deck = createDeck([card1, card2, card3]);

  const round = createRound(deck);

  expect(round.deck).to.deep.equal([card1, card2, card3])
  expect(round.currentCard).to.deep.equal({
    id: 1,
    question: 'What is Robbie\'s favorite animal',
    answers: ['sea otter', 'pug', 'capybara'],
    correctAnswer: 'sea otter'
  })
  expect(round.turns).to.equal(0)
  expect(round.incorrectGuesses).to.deep.equal([])
 })
})

describe('take turn', function() {
  it('should be able to take a turn', function(){
    const card1 = createCard(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?',
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = createDeck([card1, card2, card3]);
    
    const round = createRound(deck);
    const turn1 = takeTurn('sea otter', round)
    expect(turn1).to.equal('correct!')
    const turn2 = takeTurn('spleen', round)
    expect(turn2).to.equal('incorrect!')
    expect(round.turns).to.equal(2)
    expect(round.incorrectGuesses).to.deep.equal([14])
    expect(round.currentCard).to.deep.equal({
      id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      correctAnswer: 'playing with bubble wrap'
    })
    expect(calculatePercentCorrect(round)).to.equal(50)
    takeTurn('playing with bubble wrap', round)
    expect(endRound(round)).to.equal(
      `** Round over! ** You answered 33% of the questions correctly!`)
  })

})


// describe