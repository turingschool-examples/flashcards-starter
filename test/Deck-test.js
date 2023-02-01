const chai = require('chai');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck([
      new Card(1, 'What is the best rodent?', ['rat', 'chipmunk', 'capybara'], 'capybara'),
      new Card(2, 'How much wood would a wood chuck chuck if a wood chuck could chuck wood?', ['a little', 'a lot', 'all of it'], 'all of it'),
      new Card(3, 'What is the color of the sky?', ['blue', 'peuce', 'salmon'], 'blue')
    ]);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have cards', () => {
    expect(deck.cards).to.deep.equal([
      {
        id: 1,
        question: 'What is the best rodent?',
        answers: ['rat', 'chipmunk', 'capybara'],
        correctAnswer: 'capybara'
      },
      {
        id: 2,
        question: 'How much wood would a wood chuck chuck if a wood chuck could chuck wood?',
        answers: ['a little', 'a lot', 'all of it'],
        correctAnswer: 'all of it'
      },
      {
        id: 3,
        question: 'What is the color of the sky?',
        answers: ['blue', 'peuce', 'salmon'],
        correctAnswer: 'blue'
      },
    ]);
  });

  it('should count how many cards it has', () => {
    expect(deck.countCards()).to.equal(3);
  });
});