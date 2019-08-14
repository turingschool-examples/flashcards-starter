const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

let deck, card1, card2, card3;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(12, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(14, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3]);
})

describe('Deck', function () {
  it('should be a function', function () {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be able to count cards', function() {
    expect(deck.countCards()).to.equal(3);
  }); 
});