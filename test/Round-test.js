const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Round', () => {
  let round, deck, cards;

  beforeEach(() => {
    cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));

    deck = new Deck(cards);

    round = new Round(deck);
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have a deck', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should have a current card equal to the first card in the deck', () => {
    expect(round.currentCard).to.deep.equal(deck.cards[0]);
  });

  it('should have a turn counter that initializes at zero', () => {
    expect(round.turns).to.equal(0);
  });

  it('should have an array to keep track of incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  });

  it('should be able to take a turn', () => {
    expect(round.takeTurn('purple')).to.equal('incorrect!');
    expect(round.turns).to.equal(1);
    expect(round.currentCard).to.deep.equal(deck.cards[1]);
    expect(round.incorrectGuesses[0]).to.equal(1);

    expect(round.takeTurn('array')).to.equal('correct!');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.currentCard).to.deep.equal(deck.cards[2]);
  });

  it('should be able to calculate the percent correct', () => {
    round.takeTurn('purple'); // incorrect
    round.takeTurn('Paris'); // incorrect
    round.takeTurn('mutator method'); // correct
    round.takeTurn('accessor method'); // correct
    round.takeTurn('iteration method'); // correct

    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses[1]).to.equal(2);
    expect(round.turns).to.equal(5);
    expect(round.calculatePercentCorrect()).to.equal(60);
  });

  it('should be able to end a round', () => {
    round.takeTurn('purple'); // incorrect
    round.takeTurn('array'); // correct
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});