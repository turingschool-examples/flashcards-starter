const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function(){
  it('should be an instance of Deck', function(){
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should be initialized with an array of cards', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    expect(deck.cardsInDeck).to.deep.equal([card1, card2, card3]);
  });

  it('should count how many cards are in the deck', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    deck1.countCards();
    expect(deck1.countCards()).to.equal(3);

    const card4 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    const deck2 = new Deck([card4]);
    deck2.countCards();
    expect(deck2.countCards()).to.equal(1);

    const deck3 = new Deck();
    deck3.countCards();
    expect(deck3.countCards()).to.equal(0);
  });


});
