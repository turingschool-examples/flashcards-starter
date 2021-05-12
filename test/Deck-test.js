const chai = require('chai');
const expect = chai.expect;

    // const Turn = require('../src/Turn');
    const Card = require('../src/Card');
    const Deck = require('../src/Deck');

describe('Deck', () => {
  // let someVariables
  //let card, turn, guessOutcome;

//   beforeEach('setup', () => {
//     // card = new Card(1, "What is your favorite city in Japan?", ["Hiroshima, Onomichi, Osaka"] , 'Onomichi');
//     // turn = new Turn("guess", card);
//   });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should know how many cards are in the deck ', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    
    const deck = new Deck([card1, card2, card3]);
    const cardCount = deck.countCards();

    expect(cardCount).to.equal(3);
  });

  it('should be able to have decks of different length ', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const card4 = new Card(99, 'What is Obama\'s age?', ['59', '65', '48'], '59');
    
    const deck = new Deck([card1, card2, card3, card4]);
    const cardCount = deck.countCards();
    
    expect(cardCount).to.equal(4);
  });

  it('should be able to have default deck length ', () => {
    const deck = new Deck([]);
    const cardCount = deck.countCards();
    
    expect(cardCount).to.equal(0);
  });


});
