const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {
    var round;
    var card1;
    var card2;
    var card3;
    var deck;

    beforeEach(() => {
      card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
      card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
      card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
      deck = new Deck([card1, card2, card3]);
      round = new Round(deck);
    });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should know the currentCard at the beginning of the game is at the top of the deck', () => {
    expect(round.currentCard).to.deep.equal(deck.cards[0]);
  });

  it('should be able to return the card being played', () => {
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.deep.equal(card1);
  });

  describe ('Taking Turns', () => {
    it('should keep track of what turn the game is on', () => {
      round.takeTurn();
      expect(round.turns).to.equal(1);
    });
   
    it('evaluates guesses', () => {
      round.takeTurn("you flap your arms");
      const isGuessCorrect = round.mostRecentEvaluation;
      expect(isGuessCorrect).to.equal(false);     
    });
   
    it('gives / returns feedback', () => {
      const result = round.takeTurn("you don't");
      expect(result).to.equal('correct!');
    });

    it('stores incorrect guesses', () => {
      round.takeTurn('you flap your arms');
      expect(round.incorrectGuesses).to.deep.equal(['you flap your arms']); 
    });

    it('stores correct guesses', () => {
        round.takeTurn('you don\'t');
        expect(round.correctGuesses).to.deep.equal(['you don\'t']);
    });
    it('it should create a new instance of a Turn', () => {
        round.takeTurn('you don\'t');
        expect(round.currentTurn).to.be.an.instanceOf(Turn);
    });
  });
  
  describe ('End Game', () => {
    it('Can calculatePercentCorrect', () => {
        round.takeTurn('you flap your arms');
        round.takeTurn('robots');
        const percentCorrect = round.calculatePercentCorrect();
        expect(percentCorrect).to.equal(50);
    });
    
    it.skip('can end the round and print a specific message with percentage correct');
 
  });

});