const chai = require('chai');
const expect = chai.expect
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
  let deck;
  let card1;
  let card2;
  let card3;
  beforeEach( () => {
    card1 = new Card(1, 'Between Ron Weasley, Hermione Granger, and Harry Potter, who was acknowledged as being the best at spells?', ['Hermione', 'Ron', 'Harry'], 'Hermione');
    card2 = new Card(2, 'How many siblings does Ron Weasley have?', ['4', '5', '6'], '6');
    card3 = new Card(3, `Which of these subjects did Severus Snape NOT teach at Hogwart's School of Witchcraft and Wizardry?`, ['Potions', 'Defense Against the Dark Arts', 'Transfiguration'], 'Transfiguration');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to count total cards in deck', () => {
    expect(deck.countCards()).to.deep.equal(3);
  })
});
