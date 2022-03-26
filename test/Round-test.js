const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  let card1
  let card2
  let card3
  let round
  let deck
  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

     deck = new Deck([card1, card2, card3])
     round = new Round(deck);
     
  }) 

  
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should start with a deck of cards', () => {
    expect(round.deck.length).to.deep.equal(3)
  })

  it('should start at zero turns', () => {
    expect(round.turnCount).to.equal(0)
  })

  it('should start with zero incorrenct guesses', () => {
    expect(round.incorrectGuesses.length).to.deep.equal(0)
  })

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should be an instance of a turn', () => {
    round.takeTurn()
    expect(round.currentTurn).to.be.an.instanceof(Turn)
  })

  it('should update the turn count', () => {
    round.takeTurn()
    expect(round.turnCount).to.equal(1)
  })

  it('should be able to change to the next card', () => {
    round.takeTurn()
    expect(round.returnCurrentCard()).to.equal(card2)
  })

  it('should store incorrect guesses', () => {
    round.takeTurn()
      expect(round.incorrectGuesses).to.deep.equal([1])
  })

  it('should provide feedback', () => {
    expect(round.takeTurn()).to.equal('incorrect')

  })

  it('should be able to calculate and return the percentage of correct guesses', () => {
    round.takeTurn()
    
    expect(round.calculatePercentCorrect()).to.equal(0)
  })

  it('should call endRound', () => {
    round.takeTurn()
      expect(round.endRound()).to.equal(true)
    
  })

})

