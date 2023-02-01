const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Deck', function() {
  let card1, card2, card3, deck, round;
  
  beforeEach('card instances and deck instance', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have a deck of cards', () => {
    expect(round.deckStack).to.be.an('object');
    expect(round.deckStack).to.be.an.instanceof(Deck);
    expect(round.deckStack.stack[2]).to.be.an.instanceof(Card);
  });  

  it('should be a able to show current card', () => {
    const currentCard = round.returnCurrentCard()

    expect(currentCard).to.be.an.instanceof(Card);
  });  

  it('should be able to take a turn', () => {
    round.takeTurn("guess")

    expect(round.userTurn).to.be.an.instanceof(Turn);
  });  
});