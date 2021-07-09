const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe ('Deck', function() {

  it('should be a function', function() {
    //Setup
    // const deck = new Deck();
    //Execution
    //Assertion
    expect(Deck).to.be.a('function');
  });

  it('should accept a game card', function() {
    //Setup
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    //Execution
    const deck = new Deck([card]);
    //Assertion
    expect(deck.cards).to.deep.equal([{id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object'}])
  });

  it('should accept many game cards ', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    //Execution
    const deck = new Deck([card1, card2, card3]);
    //Assertion
    expect(deck.cards).to.deep.equal([{id: 1, question: 'What is Robbie\'s favorite animal?', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'},
                                      {id: 2, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'},
                                      {id: 3, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'}]);
  });

  it('should know how many cards are in the deck', function() {
    //Setup
    const card1 = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    const deck = new Deck([card1, card2, card3]);
    //Execution
    deck.countCards();
    //Assertion
    expect(deck.countCards()).to.equal(3);
  });
});
