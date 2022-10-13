const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe("Round", () => {
  it("should hold the current deck", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3])

  })
  it("should return the current card being played", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard()

    expect(round.returnCurrentCard()).to.deep.equal({
      id: 1,
      question: 'What is Robbie\'s favorite animal',
      answers: ['sea otter', 'pug', 'capybara'],
      correctAnswer: 'sea otter'
      })
  })
  it("should move to the next card after a guess is made", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn("sea otter")

    round.takeTurn('spleen')

    round.returnCurrentCard()

    expect(round.returnCurrentCard()).to.deep.equal({ id: 12,
      question: 'What is Travis\'s favorite stress reliever?',
      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      correctAnswer: 'playing with bubble wrap'})
  })
  it("should evaluate if a guess is correct", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard()
    const seaOtterTest = round.takeTurn('sea otter')
  
    expect(seaOtterTest).to.equal("correct!")
  })
  it("should evaluate if a guess is incorrect", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card2, card3, card1]);

    const round = new Round(deck);

    round.returnCurrentCard()
    
    const spleenTest = round.takeTurn('spleen');
  
    expect(spleenTest).to.equal("incorrect!")
    //ASK SARAH ON THIS!!! does this count as the execution if it is in the assertion?
  })
  it("should count turns", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3])

    const round = new Round(deck)

    expect(round.turns).to.equal(0)

    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    expect(round.turns).to.equal(2)
  })
  it("should keep track of incorrect guesses", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([])

    round.takeTurn('sea otter')
    round.takeTurn('spleen')

    expect(round.incorrectGuesses).to.deep.equal([14])
  })
  it("should calculate percent of correct guesses", () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('watching Netflix')
    round.calculatePercentCorrect()

    expect(round.calculatePercentCorrect()).to.equal(33)
  })
  //Do I need a test for end round? Is there a way to test console.logs?
})
