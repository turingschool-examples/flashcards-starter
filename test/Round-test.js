const expect = require('chai').expect;
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

describe('Round', function() {
  let round;
  let deck;
  let card1;
  let card2;
  let card3;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should be a new instance of Round', function() {
    expect(round).to.be.a.instanceOf(Round)
  })

  it('should have a current card', function() {
    expect(round.currentCard).to.equal(card1)
  })

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(round.currentCard)
  })

  it('should update the turn counter', function() {
    round.takeTurn('pug')
    expect(round.turns).to.equal(1)
  })

  it('should record correct guess', function() {
    round.takeTurn('pug')
    expect(round.correct).to.equal(0)

    round.takeTurn('gallbladder')
    expect(round.correct).to.equal(1)
  })

  it('should record the id of incorrect guesses', function() {
    round.takeTurn('pug');
    expect(round.incorrect[0]).to.equal(1);

    round.takeTurn('appendix');
    expect(round.incorrect[1]).to.equal(14);
    expect(round.incorrect.length).to.equal(2)
  })

  it('should make the next card the current card', function() {
    expect(round.currentCard).to.equal(card1)

    round.takeTurn('pug')
    expect(round.currentCard).to.equal(card2)
  })

  it('should give feedback whether it is correct or incorrect', function() {
    let feedback = round.takeTurn('pug')
    expect(feedback).to.equal('incorrect')

    feedback = round.takeTurn('gallbladder')
    expect(feedback).to.equal('correct!')
  })

  it('should calculate and return the percentage of correct guesses', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(66)
  })

  it('should end the round', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.endRound()).to.equal('** Round Over! **  You answered 66% correctly!')
  })
})