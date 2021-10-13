const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array of Card objects', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.cards).to.deep.equal(cards);
  });

  it('should be able to return how many cards are in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const cards1 = [card1, card2, card3];
    const deck1 = new Deck(cards1);
    const result1 = deck1.countCards();
    expect(result1).to.equal(3);
    const cards2 = [card2, card3];
    const deck2 = new Deck(cards2);
    const result2 = deck2.countCards();
    expect(result2).to.equal(2);
    const cards3 = [card1];
    const deck3 = new Deck(cards3);
    const result3 = deck3.countCards();
    expect(result3).to.equal(1);
    const cards4 = [];
    const deck4 = new Deck(cards4);
    const result4 = deck4.countCards();
    expect(result4).to.equal(0);
    const deck5 = new Deck();
    const result5 = deck5.countCards();
    expect(result5).to.equal(0);
  });
});
