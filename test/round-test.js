const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {
  let round;

  beforeEach(() => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?',['object', 'array', 'function'],'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?',['array', 'object', 'function'],'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?',['mutator method', 'accessor method', 'iteration method'],'mutator method');
    const deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', () => {

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', () => {

    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card', () => {
    // console.log(typeof round.currentCard);
    // console.log('deck object', round.currentCard);
    // console.log('array in deck object', round.currentCard.allCards[0]);

    expect(round.returnCurrentCard()).to.deep.equal({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
    })
  });

  it('should increase by one every time that the takeTurn() is called', () => {

    round.takeTurn('array');

    expect(round.turns).to.equal(1);
  });

  it('should make the next card becomes the current card', () => {

    round.takeTurn('array');
    // console.log('test1', round.currentCard);
    // console.log('test1-1', round.allCards);

    expect(round.currentCard).to.deep.equal({
    "id": 1,
    "question": "What allows you to define a set of related information using key-value pairs?",
    "answers": ["object", "array", "function"],
    "correctAnswer": "object"
  });

    round.takeTurn('array');
    // console.log('test2', round.currentCard);
    // console.log('test2-2', round.allCards);

    expect(round.currentCard).to.deep.equal({
      'id': 2,
      'question': 'What is a comma-separated list of related values?',
      'answers': ['array', 'object', 'function'],
      'correctAnswer': 'array'
    });

    round.takeTurn('accessor method');
    // console.log('test3', round.currentCard);
    // console.log('test3-3', round.allCards);

    expect(round.currentCard).to.deep.equal({
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    });
  });

  it('should return a feedback based on the player guess', () => {

    expect(round.takeTurn('array')).to.deep.equal('incorrect');
  });

  it('should add bad answers id, into the incorrect answers container', () => {

    round.takeTurn('array');

    expect(round.incorrectGuesses[0]).to.equal(1);
  });

  it('should add good answer id, into the correct answers container', () => {

    round.takeTurn('object');

    expect(round.correctGuesses[0]).to.equal(1);
  });

  it.skip('should give a percentage of the correct answer during the game', () => {

    round.takeTurn('array');
    round.takeTurn('array');

    expect(round.calculatePercentCorrect()).to.deep.equal(50);
  });

  it.skip('should give a percentage of the correct answer during the game', () => {

    round.takeTurn('array');
    round.takeTurn('array');
    round.calculatePercentCorrect();

    expect(round.endRound()).to.deep.equal('** Round over! ** You answered 2% of the questions correctly!');
  });
});
