const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck')
describe('Deck', function() {
  it('should be a function' , function(){
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });
  it('should be an array' , function(){
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const cards = [card];
    const deck = new Deck(cards);
    expect(deck.cards.length).to.deep.equal(1);
  });
  it('should count how many cards there are', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    deck.countCards();
    expect(deck.countCards()).to.deep.equal(3);
  })
});
