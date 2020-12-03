const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, card4;
  let deck;
  let round1;

  beforeEach(() => {
    card1 = new Card(3, 'An object allows you to define a set of related information using what kind of pairs?', ['object-subject', 'key-value', 'index-array'], 'key-value');
    card2 = new Card(5,'Which dog breed most resembles the data type that indicates a true or false value?', ['Golden Retriver', 'Cocker Spaniel', 'Sheepdog', 'Bolognese'], 'Bolognese');
    card3 = new Card(12, 'What are the two ways you can access properties of an object?', ['bracket notation and dot notation', 'bracket notation and index-array notation', 'dot notation and literal notation'], 'bracket notation and dot notation');
    card4 = new Card(30, 'What is the acronym for primitive data types?', ['BUNNS', 'STUBS', 'BUNY', 'YOLO'], 'BUNNS');
    deck = new Deck([card1, card2, card3, card4]);
    round1 = new Round(deck);
  })

  it('should include an instance of Deck as a property', () => {
    expect(round1.deck).to.be.an.instanceOf(Deck);
  })

  it('should include a property of number of turns taken', () => {
    expect(round1).to.have.property('turnsCount');
  })

  it('should start the turns count at the number zero', () => {
    expect(round1.turnsCount).to.equal(0);
  })

  it('should have a property that keeps track of incorrect guesses made', () => {
    expect(round1).to.have.property('incorrectGuesses');
  })

  it('should start the value of incorrect guesses made with an empty array', () => {
    expect(round1.incorrectGuesses).to.deep.equal([]);
  })

  it('should have a method that returns the current card being played', () => {
    expect(round1.returnCurrentCard()).to.equal(card1);
  })

  it('should have a method that updates the turns count', () => {
    round1.takeTurn('object-subject');
    expect(round1.turnsCount).to.equal(1);
  })

  it('should play the first card in the deck as the current card to play', () => {
    round1.returnCurrentCard();
    expect(round1.currentCard).to.equal(round1.deck.cards[0]);
  })

  it('should evaluates guesses and stores ids of incorrect guesses in the same method', () => {
    round1.takeTurn('object-subject');
    expect(round1.incorrectGuesses).to.deep.equal([3]);
  })

  it('should return feedback in the same method if the guess is incorrect', () => {
    expect(round1.takeTurn('object-subject')).to.equal('Incorrect!');
  })

  it('should return feedback in the same method if the guess is correct', () => {
    expect(round1.takeTurn('key-value')).to.equal('Correct!');
  })

  it('should reassign the next card in the array to the currentCard variable', () => {
    round1.takeTurn('key-value');
    round1.takeTurn('Golden Retriever');
    expect(round1.currentCard).to.equal(card2);
  })

  it('should be able to calculate and return the percentage of correct guesses', () => {
    round1.takeTurn('object-subject');
    round1.takeTurn('Bolognese');
    expect(round1.calculatePercentCorrect()).to.equal(50);
  })

  it('should print to the console when the round ends, "**Round over!** You answered <>% of the questions correctly!"', () => {
    round1.takeTurn('key-value');
    round1.takeTurn('Bolognese');
    round1.takeTurn('bracket notation and dot notation');
    round1.takeTurn('BUNNS')
    expect(round1.deck.cards).to.deep.equal([]);
  })
})
