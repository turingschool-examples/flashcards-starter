const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag'], 'stag');
    card2 = new Card(14, 'What does Dumbledore give Ron in his will?', ['deluminator', 'invisibility cloak', 'wand'], 'deluminator');
    card3 = new Card(12, 'What does the Imperius Curse do?', ['kills', 'controls', 'mimics'], 'controls');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should take an array of Cards as an argument', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many Cards are in the deck', () => {
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  });
})
