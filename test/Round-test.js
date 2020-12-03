const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
  let card1, card2, card3, card4;
  let turn1, turn2;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(3, 'An object allows you to define a set of related information using what kind of pairs?', ['object-subject', 'key-value', 'index-array'], 'key-value');
    card2 = new Card(5,'Which dog breed most resembles the data type that indicates a true or false value?', ['Golden Retriver', 'Cocker Spaniel', 'Sheepdog', 'Bolognese'], 'Bolognese');
    card3 = new Card(12, 'What are the two ways you can access properties of an object?', ['bracket notation and dot notation', 'bracket notation and index-array notation', 'dot notation and literal notation'], 'bracket notation and dot notation');
    card4 = new Card(30, 'What is the acronym for primitive data types?', ['BUNNS', 'STUBS', 'BUNY', 'YOLO'], 'BUNNS');
    deck = new Deck([card1, card2, card3, card4]);
    turn1 = new Turn('index-array', card1);//incorrect answer
    turn2 = new Turn('key-value', card1)//correct answer
    round1 = new Round(deck);
  })

  it('should include an instance of Deck as a property', () => {
    expect(round1.deck).to.be.an.instanceOf(Deck);
  })

  //it should have a property that keeps track of number of turns
  it('should include a property of number of turns taken', () => {
    expect(round1).to.have.property('turnsCount');
  })

  it('should start the turns count at the number zero', () => {
    expect(round1.turnsCount).to.equal(0);
  })

  //it should have a property that keeps track of incorrect guesses
  it('should have a property that keeps track of incorrect guesses made', () => {
    expect(round1).to.have.property('incorrectGuesses');
  })

  it('should start the value of incorrect guesses made with an empty array', () => {
    expect(round1.incorrectGuesses).to.deep.equal([]);
  })
  //it should have a method to return the current card being played (returnCurrentCard())
  it('should have a method that returns the current card being played', () => {
    expect(round1.returnCurrentCard()).to.equal(round1.deck.cards[0]);
  })
  //it should have a method that updates turns count, evaluates, guesses, gives feedback, and stores ids of incorrect guesses (takeTurn())
  it('should have a method that updates the turns count', () => {
    round1.returnCurrentCard();
    round1.takeTurn(turn1);
    expect(round1.turnsCount).to.equal(1);
  })

  it('should evaluates guesses and stores ids of incorrect guesses in the same method', () => {
    round1.returnCurrentCard();
    round1.takeTurn(turn1);
    expect(round1.incorrectGuesses).to.deep.equal([3]);
  })

  it('should return feedback in the same method if the guess is incorrect', () => {
    round1.returnCurrentCard();
    round1.takeTurn(turn1);
    expect(round1.takeTurn(turn1)).to.equal('Incorrect!');
  })

  it('should return feedback in the same method if the guess is correct', () => {
    round1.returnCurrentCard();
    round1.takeTurn(turn2);
    expect(round1.takeTurn(turn2)).to.equal('Correct!');
  })

  //it should update the turn count, regardless of whether the guess is correct or Incorrect
  //it should reassign the next card in the array to the currentCard variable
  //it should evaluate and record the guess
  //it should store incorrect guesses
  //it should give feedback for correct guesses
  //it should give feedback for incorrect guesses
  //it should be able to calculate and return the percentage of correct guesses (calculatePercentCorrect)
  //it should print to the console when the round ends, "**Round over!** You answered <>% of the questions correctly!" (endRound())
})

//Round class takes in responses and records these guesses, including whether they are correct or Incorrect
//currentCard should be the first Card in the Deck at the start of the Round
//
