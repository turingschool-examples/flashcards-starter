const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

let card1, card2, card3, card4, turn1, turn2, turn3, turn4, deck, round;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  card4 = new Card(16, 'What is Jacob\'s middle name?', ['James', 'Robert', 'Fitzgerald'], 'Robert');
  turn1 = new Turn('sea otter', card1);
  turn2 = new Turn('gallbladder', card2);
  turn3 = new Turn('Fitzgerald', card3);
  turn4 = new Turn('blah', card4);
  deck = new Deck([card1, card2, card3, card4]);
  round = new Round(deck);
})

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });  

  it('should store incorrect guesses', function() {
    round.takeTurn('dog');
    expect(round.incorrectGuesses.length).to.equal(1);
  });  

  it('should cycle through deck', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    round.takeTurn('blah');
    expect(round.returnCurrentCard()).to.equal(card2)
  }); 

  it('should give incorrect guess feedback', function() {
    let result = round.takeTurn(turn2.guess);
    expect(result).to.equal('incorrect!');
  }); 

  it('should give correct guess feedback', function() {
    let result = round.takeTurn(turn1.guess);
    expect(result).to.equal('correct!');
  }); 

  it('should calculate percent correct', function() {
    round.takeTurn(turn1.guess);
    round.takeTurn(turn2.guess);
    round.takeTurn(turn3.guess);
    round.takeTurn(turn4.guess);
    let result = round.calculatePercentCorrect();
    expect(result).to.equal(75);
  }); 

  it('should display final message with percent correct', function() {
    round.takeTurn('sea otter');
    round.takeTurn('blah')
    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  }); 
});