const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function(){
  it('should be an instance of Round', function(){
    const round1 = new Round();
    expect(round1).to.be.an.instanceOf(Round);
  });

  it('should start with a deck of cards', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);
    expect(deck1).to.equal(deck1);
  });

  it('should return the first card being played at the beginning of the round', function(){
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck1 = new Deck([card1, card2, card3]);
    const round1 = new Round(deck1);
    round1.returnCurrentCard();
    expect(round1.returnCurrentCard()).to.equal(round1.deck.cardsInDeck[0]);
  });


});
