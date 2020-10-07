const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should be initialized with an array of Card objects', function() {
    const card1 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(9, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const flashcards = [card1, card2, card3];
    const deck = new Deck(flashcards);

    expect(deck.cards).to.deep.equal(flashcards);
    expect(deck.cards[2].answers).to.deep.equal(['spleen', 'appendix', 'gallbladder']);
    expect(deck.cards[1].correctAnswer).to.equal('sea otter');
    expect(deck.cards[0].id).to.equal(3);
  });

  it('should only accept Card objects', function() {
    const card1 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(9, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card4 = {brand: 'Pizza Hut', type: 'thin-crust', tasty: false}
    const flashcards1 = [card1, card2, 1];
    const flashcards2 = [card1, 'card33', card4];
    const flashcards3 = [card1, card2, card3];
    const deck1 = new Deck(flashcards1);
    const deck2 = new Deck(flashcards2);
    const deck3 = new Deck(flashcards3);
    const deck4 = new Deck();

    expect(deck1.cards).to.deep.equal([card1, card2]);
    expect(deck2.cards).to.deep.equal([card1]);  // check against valid Card class object && undefined
    expect(deck3.cards).to.deep.equal([card1, card2, card3]);
    expect(deck4.cards).to.equal(undefined); //check how to prevent initialization? Or remove afterward w/self check method?
  });

  it('should only accept Card objects with an `invalidCard` value of false', function() {
    const card1 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(9, 'What is Robbie\'s favorite animal', ('sea otter', 'pug', 'capybara'), 'sea otter');
    const card3 = new Card(14, 'What organ is Khalid missing?', 1, 'gallbladder');
    const card4 = {brand: 'Pizza Hut', type: 'thin-crust', tasty: false}
    const flashcards1 = [card1, card2, 1];
    const flashcards2 = [card1, 'card33', card4];
    const deck1 = new Deck(flashcards1);
    const deck2 = new Deck(flashcards2);

    expect(deck1.cards).to.deep.equal([card1]);
    expect(deck2.cards).to.deep.equal([card1]);  // check against valid Card class object && undefined
  });

  it('should return the amount of cards in the deck', function() {
    const card1 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(9, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card3 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card4 = {brand: 'Pizza Hut', type: 'thin-crust', tasty: false}
    const flashcards1 = [card1, card2, 1];
    const flashcards2 = [card1, 'card33', card4];
    const flashcards3 = [card1, card2, card3];
    const deck1 = new Deck(flashcards1);
    const deck2 = new Deck(flashcards2);
    const deck3 = new Deck(flashcards3);
    const deck4 = new Deck();

    expect(deck1.countCards()).to.equal(2);
    expect(deck2.countCards()).to.equal(1);
    expect(deck3.countCards()).to.equal(3);
    expect(deck4.countCards()).to.equal(undefined);
  });
});
