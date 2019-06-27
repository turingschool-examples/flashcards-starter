const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

var card1, card2, card3, deck, round;

describe('Round', function() {

  beforeEach( function() {
    card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
  deck = new Deck([card1,card2,card3]);
  round = new Round(deck);

  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

    it('should be able to accept a deck of cards', function() {
    expect(round.deck.cards).to.eql([card1,card2,card3]);
  });

  describe('returnCurrentCard', () =>{
    it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.eql(deck.cards[0])
    })
  });

  describe('takeTurn',() => {
    it('should count each turn', () => {

    round.takeTurn('sea otter')    
    expect(round.turns).to.eql(1)
    
    round.takeTurn('great ladder')    
    expect(round.turns).to.eql(2)
     });

    it('should evaluate each guess', () => {
      round.takeTurn('sea otter') 
      expect(round.takeTurn('gallbladder')).to.eql('correct!');
    });

    it('should store the id of the card if the guess is incorrect', () => {
      round.takeTurn('sea otter')
      round.takeTurn('gallbladder') 
      expect(round.takeTurn('FitsHarold')).to.eql('incorrect!');
      expect(round.incorrectGuesses[0]).to.eql(12);
    });
  });

   describe('calculatePercentCorrect', () => {
    it('should calculate the percentage of answers that are correct', () => {
      round.takeTurn('sea otter')
      round.takeTurn('gallbladder') 
      expect(round.takeTurn('FitsHarold')).to.eql('incorrect!');
      let percent = (2/3 *100);
      expect(round.calculatePercentCorrect()).to.equal(percent.toFixed(2));
   });
  });

});