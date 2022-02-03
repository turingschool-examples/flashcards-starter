const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');




describe('Round', function() {
  //create variables that will store information
  let card1, card2, card3;
  let cards;
  let deck;
  let round;

  beforeEach(function() {
    //instantiate new cards with values
    card1 = new Card (1, 'What is a group of hedgehogs called?', ['Gaggle', 'Parade', 'Pickle'], 'Pickle');
    card2 = new Card (2, 'Where in it\s body is a shrimp\s heart located?', ['Head', 'Chest', 'Legs'], 'Head');
    card3 = new Card (3, 'Which animal never sleeps?', ['Bullfrog', 'Hummingbird', 'Shark'], 'Bullfrog');

    //let cards will be assigned to the 3 new cards
    cards = [card1, card2, card3];
    //let deck will be assigned to a new deck instantiation taking in the cards
    deck = new Deck(cards);
    //let round will be assigned to a new round instantiation taking in the deck
    round = new Round(deck);
  });

  //Round should be a function
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });
  //round should be an instance of Round
  it('should be an instance of a Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });
  //when a new round starts, it should return the first card in the deck
  it('should return the first card in the deck when new round starts', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });
  //update the turn by one count after each turn
  it('should increase the turn count each time the user plays a turn', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn();
    expect(round.turns).to.equal(1);
  });
  //return the current card being played
  it('should return the current card being played', function() {
    //on first turn, the current card in the deck should be at index 0
    round.takeTurn();
    expect(round.currentCard).to.equal(deck.cards[0]);
    //on second turn, the current card in the deck should be at index 1
    round.takeTurn();
    expect(round.currentCard).to.equal(deck.cards[1]);
  });
  //it should decide if the user guess is correct or incorrect
  it('should determine if a guess is correct or incorrect', function() {
    //display correct message if guess is correct
    expect(round.takeTurn('Pickle')).to.equal('Correct! Great job!');
    //display incorrect message if guess is incorrect
    expect(round.takeTurn('Parade')).to.equal('Ope! Incorrect!');
  });
  //it should push incorrect guesses to new incorrectGuesses array
  it('should add incorrect guesses to a new array', function() {
    //new turn on Round
    round.takeTurn('Parade');
    //push to new array
    expect(round.incorrectGuesses).to.deep.equal([1]);
  })
  //it should be able to calculate the percentage of correct answers
  it('should calculate the number of correct answers by percentage', function() {
    //new turn in round with correct answer
    round.takeTurn('Pickle');
    expect(round.calculatePercentCorrect()).to.equal(100);
  })
  //it should be able to print a message when the round is over
  //including the percentage of correct correct answers
  it('should end the round and display message with percentage of correct answers', function() {
    round.takeTurn('Gaggle');
    round.takeTurn('Pickle');

    expect(round.endRound()).to.equal('** Round over! ** You answered 50% of the questions correctly!');
  });
});
