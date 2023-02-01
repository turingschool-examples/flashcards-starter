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
    expect(round.turns).to.equal(0);

    round.takeTurn("guess")

    expect(round.turns).to.equal(1);
    expect(round.userTurn).to.be.an.instanceof(Turn);
  });  

  it('should be able to guess INCORRECTLY', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn("guess")

    expect(round.userTurn).to.be.an.instanceof(Turn);
    expect(round.turns).to.equal(1);
    expect(round.userTurn.match).to.equal(false);
  }); 

  it('should be able to save cards that were answered incorrectly', () => {
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn("guess")

    expect(round.turns).to.equal(1);
    expect(round.userTurn.match).to.equal(false);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  }); 

  it('should be able to guess CORRECTLY', () => {
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn("sea otter")

    expect(round.turns).to.equal(1);
    expect(round.userTurn.match).to.equal(true);
    expect(round.incorrectGuesses).to.deep.equal([]);
  }); 

  it('should be able to guess CORRECTLY', () => {
    round.takeTurn("sea otter")
    round.takeTurn("bad guess 1")
    round.takeTurn("bad guess 2")

    expect(round.incorrectGuesses).to.deep.equal([14, 12]);
    expect(round.calculatePercentCorrect()).to.equal(100);
    expect(round.turns).to.equal(3);
  }); 

  it('should be able to end round and let user know their score', () => {
    round.takeTurn("sea otter")
    round.takeTurn("bad guess")
    round.takeTurn("Fitzgerald")

    expect(round.incorrectGuesses).to.deep.equal([14]);
    expect(round.calculatePercentCorrect()).to.equal(50);
    expect(round.turns).to.equal(3);

    expect(round.endRound()).to.equal("** Round over! ** You answered 50% of the questions correctly!")

  }); 

});