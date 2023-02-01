const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck')
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', () => {
  const card1 = new Card(1, 'What is the best rodent?', ['rat', 'chipmunk', 'capybara'], 'capybara');
  const card2 = new Card(2, 'How much wood would a wood chuck chuck if a wood chuck could chuck wood?', ['a little', 'a lot', 'all of it'], 'all of it');
  const card3 = new Card(3, 'What is the color of the sky?', ['blue', 'peuce', 'salmon'], 'blue');
  const deck = new Deck([card1, card2, card3]);
  let round;

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
      id: 1,
      question: 'What is the best rodent?',
      answers: ['rat', 'chipmunk', 'capybara'],
      correctAnswer: 'capybara'
    });
  });
});