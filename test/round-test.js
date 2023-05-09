const chai = require('chai');
const expect = chai.expect;

const { createCard } = require('../src/card');
const {createDeck} = require('../src/deck')
const { createRound, takeTurn, calculatePercentageCorrect } = require('../src/round');

describe('createRound', function() {
  it('should be a function', function(){
    expect(createDeck).to.be.a('function')
  })
  
  it('should create a round object with a corresponding deck', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);
    
    expect(round.deck).to.be.deep.equal([card1, card2, card3])
  })
  
  it('should have a default current card that is equal to the first card', function () {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);
    
    expect(round.currentCard).to.be.deep.equal(
      { id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
      })
  })

  it('should have a turns property that starts at zero', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    expect(round.turns).to.be.equal(0)
  })

  it('should  have incorrectGuesses property that starts out as empty', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    expect(round.incorrectGuesses).to.be.equal([])
  })
})

describe('takeTurn', function(){
  it('should be a function', function() {
    expect(takeTurn).to.be.a('function')
  })

  it('should be able to make a correct guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    feedback = takeTurn('sea otter', round)

    expect(feedback).to.be.equal('correct!')
  })

  it('should be able to make an incorrect guess', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    feedback = takeTurn('pug', round)

    expect(feedback).to.be.equal('incorrect!')
  })

  it('should be able to track the number of turns made', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    takeTurn('sea otter', round)
    takeTurn('gallbladder', round)

    expect(round.turns).to.be.equal(2)
  })
  
  it('should be able to change cards', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    takeTurn('sea otter', round)

    expect(round.currentCard).to.be.deep.equal(card2)
  })
  
  it('should be able to store incorrectGuesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    takeTurn('pug', round)
    takeTurn('spleen', round)

    expect(round.incorrectGuesses).to.be.deep.equal([1, 14])
  })
  
  it('should be able to store incorrectGuesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
    
    const deck = createDeck([card1, card2, card3])
    
    const round = createRound(deck);

    takeTurn('pug', round)
    takeTurn('spleen', round)

    expect(round.incorrectGuesses).to.be.deep.equal([1, 14])
  })
  
  

}) 

describe('calculatePercentCorrect', function() {
  it('should be able to store incorrectGuesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
      
    const deck = createDeck([card1, card2, card3])
      
    const round = createRound(deck);

    takeTurn('sea otter', round)
    takeTurn('spleen', round)

    percentage = calculatePercentageCorrect(round)

    expect(percentage).to.be.equal(50)
  })
})