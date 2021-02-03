const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round.js');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantiate a new round of play', function() {
    const card = new Card(1, "Where is Waldo?");
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should store a deck of cards', function() {
    const card1 = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "I Smell Like Flowers");
    const card2 = new Card(18,
      "When is it ok to fart in public?",
      ["Outside only", "Always if necessary", "Never"],
      "Outside only");

    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    expect(round.deck).to.have.lengthOf(2);
  });

  it('should have 0 turns by default', function() {
    const card = new Card(1, "Where is Waldo?");
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should have no incorrect guesses by default', function() {
    const card = new Card(1, "Where is Waldo?");
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.incorrectGuesses).to.have.lengthOf(0);
  });

  it('should store a current flashcard', function() {
    const card1 = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I Smell like flowers"],
      "I Smell Like Flowers");
    const card2 = new Card(18,
        "When is it ok to fart in public?",
        ["Outside only", "Always if necessary", "Never"],
        "Outside only");
    const cardList = [card1, card2];
    //console.log(cardList)
    const deck = new Deck(cardList);
    //console.log(deck)
    const round = new Round(deck);
    //console.log('YOOOO'+ round.currentCard);

    expect(round.currentCard).to.equal(card1);
  });

  it('should be able to take a turn and log it', function() {
    const card = new Card(1, "Where is Waldo?");
    const deck = new Deck([card]);
    const round = new Round(deck);

    round.takeTurn();
    round.takeTurn();
    round.takeTurn();

    expect(round.turns).to.equal(3);
  });

  it.skip('should be able to return feed back when taking a turn', function() {
    const card1 = new Card(42,
      "Why do birds suddenly appear every time you are near?",
      ["Who knows", "My mom is part of the Audubon society", "I smell like flowers"],
      "I Smell Like Flowers");
    const card2 = new Card(18,
      "When is it ok to fart in public?",
      ["Outside only", "Always if necessary", "Never"],
      "Outside only");
    const userGuess1 = "I Smell Like Flowers!";
    const userGuess2 = "Never";
    const cardList = [card1, card2];
    const deck = new Deck(cardList);
    const round = new Round(deck);

    round.takeTurn("With Gusto");

  });








})
