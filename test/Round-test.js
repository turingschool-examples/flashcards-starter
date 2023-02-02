const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Round = require('../src/Round');

describe('Round', () => {
  // const card1 = new Card(1, 'What is the best rodent?', ['rat', 'chipmunk', 'capybara'], 'capybara');
  // const card2 = new Card(2, 'How much wood would a wood chuck chuck if a wood chuck could chuck wood?', ['a little', 'a lot', 'all of it'], 'all of it');
  // const card3 = new Card(3, 'What is the color of the sky?', ['blue', 'peuce', 'salmon'], 'blue');
  // const deck = new Deck([card1, card2, card3]);
  // let round;

  let cards = prototypeQuestions;
  cards = cards.map(card => new Card(card));
  let deck = new Deck(cards);

  beforeEach(() => {
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });
  
  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have a currentCard which is the first card in the deck', () => {
    expect(round.currentCard).to.be.an.instanceOf(Card);
    expect(round.currentCard).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });

  it('should start with 0 turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should be able to take a turn', () => {
    expect(round.takeTurn).is.a('function');
  });

  it('should instantiate a new Turn when it takes a turn', () => {
    const guess = 'random guess';

    round.takeTurn(guess);

    expect(round.turn).to.be.an.instanceOf(Turn);
    expect(round.turn).to.deep.equal({guess: 'random guess', card: round.deck.cards[0]})
  });

  it('should count how many turns it takes', () => {
    expect(round.turns).to.equal(0);
    
    round.takeTurn('guess argument');
    expect(round.turns).to.equal(1);

    
    round.takeTurn('guess argument');
    round.takeTurn('guess argument');

    expect(round.turns).to.equal(3);
  });

  it('should make the next card the new current card', () => {
    expect(round.currentCard).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });

    round.takeTurn('guess argument');
    expect(round.currentCard).to.deep.equal({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });

    round.takeTurn('guess argument');
    round.takeTurn('guess argument');
    
    expect(round.currentCard).to.deep.equal({
      "id": 4,
      "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "accessor method"
    });
  });

  it('should have no incorrect guesses by default', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should keep track of incorrect guess ids', () => {
    round.takeTurn('array');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should not keep track of correct guesses', () => {
    round.takeTurn('array');
    round.takeTurn('array');
    round.takeTurn('accessor method');

    expect(round.incorrectGuesses).to.deep.equal([1, 3])
  });

  it('should tell you if your answer is correct or incorrect', () => {
    const correctGuess = round.takeTurn('object');
    const incorrectGuess = round.takeTurn('function');

    expect(correctGuess).to.equal('correct!')
    expect(incorrectGuess).to.equal('incorrect!')
  });

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('array');
    round.takeTurn('array');
    round.takeTurn('accessor method');

    expect(round.calculatePercentCorrect()).to.equal(93)
  });

  it('should log a message to let the user know how they did', () => {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('accessor method');

    expect(round.endRound()).to.equal('** Round over! ** You answered 93% of the questions correctly!')
  });
});