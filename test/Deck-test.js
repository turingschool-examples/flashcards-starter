const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should know how many cards are in the deck', function(){
    
    const card1 = new Card({id:1, question:'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer:'sea otter'});
    const card2 = new Card({id:14, question:'What organ is Khalid missing?', answers:['spleen', 'appendix', 'gallbladder'], correctAnswer:'gallbladder'});
    const card3 = new Card({id:12, question:'What is Travis\'s middle name?', answers:['Lex', 'William', 'Fitzgerald'], correctAnswer:'Fitzgerald'});

    const deck = new Deck([card1, card2, card3]);

    deck.countCards();
    expect(deck.countCards()).to.deep.equal(3);
  });
})