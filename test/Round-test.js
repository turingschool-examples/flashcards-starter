const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let deck1;
  let deck2;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck1 = new Deck([card1, card2, card3])
    deck2 = new Deck([card2, card3])
    round = new Round(deck1)
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function')
  }) 

  it('should be an instance of Deck', () => {
    expect(round).to.be.an.instanceOf(Round)
  }) 

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1)
  }) 

  it('should update the turn counter', () => {
    expect(round.turns).to.equal(0)
    round.takeTurn()
    expect(round.turns).to.equal(1)
  }) 

  it('should be able to track incorrectly guessed cards', () => {
    expect(round.incorrectGuesses).to.deep.equal([])
    expect(round.takeTurn('sea otter')).to.equal('correct!')
    expect(round.takeTurn('spleen')).to.equal('incorrect!')
    expect(round.incorrectGuesses).to.deep.equal([14])
    expect(round.turns).to.equal(2)
  })

  it('should calculate the percentage of correct answers', () => {
    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('Fitzgerald')
    expect(round.calculatePercentage()).to.equal(66.67)
  })

  it('should print a message when the round is over', () => {
    round.takeTurn('sea otter')
    round.takeTurn('spleen')
    round.takeTurn('Fitzgerald')
    expect(round.calculatePercentage()).to.equal(66.67)
    expect(round.endRound()).to.equal('** Round over! ** You answered 66.67% of the questions correctly!')
  })
})