const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  beforeEach(function () {
    this.card1 = new Card(1, 'What is the national bird of South Africa', ['blue crane', 'secretary bird', 'african penguin', 'hornbill'], 'blue crane');
    this.card2 = new Card(6, 'How many official languages does South Africa have?', [9, 10, 11, 12], 11);
    this.card3 = new Card(4, 'Where is South Africa\'s legislative capital?', ['Cape Town', 'Johannesburg', 'Pretoria', 'Bloemfontein'], 'Cape Town');
    this.deck = new Deck([this.card1, this.card2, this.card3]);
    this.round = new Round(this.deck);
  })

  it('should return the current card being played', function() {
    expect(this.round.returnCurrentCard()).to.deep.equal(this.card1);
  })

  it('should update the turn count if the answer is CORRECT', function() { 
    expect(this.round.turns).to.equal(0);
    this.round.takeTurn('blue crane');
    expect(this.round.turns).to.equal(1);
  })

  it('should update the turn count if the answer is INCORRECT', function() {
    expect(this.round.turns).to.equal(0);
    this.round.takeTurn('hornbill');
    expect(this.round.turns).to.equal(1);
  })

  it('the next card should become the current card after a turn is taken', function() {
    expect(this.round.returnCurrentCard()).to.deep.equal(this.card1);
    this.round.takeTurn('blue crane');
    expect(this.round.returnCurrentCard()).to.deep.equal(this.card2);
  })

  it('should return an appropriate message if the guess is CORRECT', function() {
    expect(this.round.takeTurn('blue crane')).to.equal('correct!');
  })

  it('should return an appropriate message if the guess is INCORRECT', function() {
    expect(this.round.takeTurn('hornbill')).to.equal('incorrect!');
  })

  it('should store the id of incorrectly guessed cards', function() {
    this.round.takeTurn('hornbill')
    expect(this.round.incorrectGuesses).to.deep.equal([1]);
  })

  it('should be able to calculate the percentage of correct guesses', function() {
    this.round.takeTurn('blue crane')
    this.round.takeTurn(9)
    expect(this.round.calculatePercentCorrect()).to.equal(50);
  })

  it('should print an end-of-game message with the users percentage of correct answers', function() {
    this.round.takeTurn('blue crane')
    this.round.takeTurn(9)
    expect(this.round.endRound()).to.equal(`
-------------------------------------------

Round over! You completed the test in 0:00 seconds
You answered 50% of the questions correctly!
Press ENTER to review the cards you got wrong

-------------------------------------------`);
  })
})