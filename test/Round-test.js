const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should know the currentCard at the beginning of the game is at the top of the deck', () => {
    const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
    const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
    const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.deep.equal(deck.cards[0]);
  });

  it('should be able to return the card being played', () => {
    const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
    const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
    const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.deep.equal(card1);
  });

  describe ('Taking Turns', () => {
   
    it('should keep track of what turn the game is on', () => {
      const round = new Round();
      round.takeTurn();
      expect(round.turns).to.equal(1);
    });
   
    it('evaluates guesses', () => {
      const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
      const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
      const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      round.takeTurn("you flap your arms");
      const isGuessCorrect = round.mostRecentEvaluation;
      expect(isGuessCorrect).to.equal(false);     
    });
   
    it('gives / returns feedback feedback', () => {
      const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
      const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
      const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      const result = round.takeTurn("you don't");
      expect(result).to.equal('correct!');
    });

    it('stores incorrect guesses', () => {
      const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
      const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
      const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      round.takeTurn('you flap your arms');
      expect(round.incorrectGuesses).to.deep.equal(['you flap your arms']); 
    });

    it('stores correct guesses', () => {
        const card1 = new Card(1, "How do you fly?", ["you don't", "you flap your arms", "you steal an airplane"], "you don't");
        const card2 = new Card(2, "Can I eat a hotdog?", ["Yes", "No", "You can eat several"], "You can eat several");
        const card3 = new Card(3, "Dogs or cats?", ["dogs", "cats", "robots"], "robots");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn('you don\'t');
        expect(round.correctGuesses).to.deep.equal(['you don\'t']);
    });
    // not sure how to test for this next one yet...
    it.skip('it should create a new instance of a Turn');
    // later we'll need to be able to calculate percentage correct...
  });
  
  describe ('End Game', () => {
    it.skip('Can calculatePercentCorrect');
    
    it.skip('can end the round and print a specific message with percentage correct');
  });

});