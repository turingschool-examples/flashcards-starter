const chai = require('chai');
const expect = chai.expect;

const flashcards = require('../src/data');
const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const ReportCard = require('../src/ReportCard');

describe('Report Card', () => {
  let cards;
  let deck;
  let round;
  let game;
  let reportCard;

  beforeEach(() => {
    cards = 
    [
      new Card(flashcards.prototypeData[0]),
      new Card(flashcards.prototypeData[1]),
      new Card(flashcards.prototypeData[2]),
    ];
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game(round);
    reportCard = new ReportCard(round);
  });

  it('should detail the answer for a single card', () => {
    round.takeTurn('object'); 
    round.takeTurn('array'); 
    round.takeTurn('accessor method'); 

    expect(reportCard.getIncorrectQuestionResult(3, 'accessor method')).to.be.an('object');
    expect(reportCard.getIncorrectQuestionResult(3, 'accessor method')).to.deep.equal({
      question: 'What type of prototype method directly modifies the existing array?',
      correctAnswer: 'mutator method',
      yourAnswer: 'accessor method',
      numberOfGuesses: 1,
    })
  })

  it('should detail the answers for all the incorrect guess', () => {
    round.takeTurn('object'); 
    round.takeTurn('array'); 
    round.takeTurn('accessor method'); 

    expect(reportCard.getIncorrectQuestionResults()).to.deep.equal(
      [
        {
          question: 'What type of prototype method directly modifies the existing array?',
          correctAnswer: 'mutator method',
          yourAnswer: 'accessor method',
          numberOfGuesses: 1,
        },
      ],
    )
  })

})