const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let newDeck;
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    newDeck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(newDeck).to.be.an.instanceof(Deck);
  }); 

  it('should store an array of cards', () => {
    expect(newDeck.cards).to.deep.equal([
      {
        id: 1,
        question: "What is Robbie's favorite animal",
        answers: [ 'sea otter', 'pug', 'capybara' ],
        correctAnswer: 'sea otter'
      },
       {
        id: 14,
        question: 'What organ is Khalid missing?',
        answers: [ 'spleen', 'appendix', 'gallbladder' ],
        correctAnswer: 'gallbladder'
      },
       {
        id: 12,
        question: "What is Travis's middle name?",
        answers: [ 'Lex', 'William', 'Fitzgerald' ],
        correctAnswer: 'Fitzgerald'
      }
    ]);
  });

  it('should know how many cards are in the deck', () => {
    expect(newDeck.countCards()).to.equal(3);
  });
});
