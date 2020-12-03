const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a current card that is the first card in a deck',
  function() {

    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update turns when a guess is made',
  function() {

    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn();

    expect(round.turns).to.equal(1);
  });

  it('should instantiate new Turn',
  function() {

    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('coelocanth');

    expect(round.turn.card.id).to.equal(card1.id);
  });

  it('should change the currentCard',
  function() {

    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('coelocanth');

    expect(round.card.id).to.equal(card2.id);
  });

  it('should evaluate guess',
  function() {

    const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
    const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
    const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('coelocanth');

    expect(round.turn.evaluateGuess()).to.equal(false);
  });
});

it('should store incorrect guess in incorrectGuesses array',
function() {

  const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
  const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
  const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  round.takeTurn('coelocanth');

  expect(round.incorrectGuesses.length).to.equal(1);
  expect(round.incorrectGuesses).to.deep.equal([ 1 ])
});

it('should not store correct guess in incorrectGuesses array',
function() {

  const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
  const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
  const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  round.takeTurn('river dolphin');

  expect(round.incorrectGuesses.length).to.equal(0);
  expect(round.incorrectGuesses).to.deep.equal([])
});

it('should return feedback if guess is incorrect',
function() {

  const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
  const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
  const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  round.takeTurn('coelocanth');

  expect(round.turn.giveFeedback()).to.equal('incorrect!');
});

it('should return feedback if guess is correct',
function() {

  const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
  const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
  const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  round.takeTurn('river dolphin');

  expect(round.turn.giveFeedback()).to.equal('correct!');
});

it('should calculate percent of correct guesses',
function() {

  const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
  const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
  const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  round.takeTurn('river dolphin');
  round.takeTurn('Jeff');
  round.takeTurn('Princess');

  round.calculatePercentCorrect();

  expect(round.calculatePercentCorrect()).to.equal(66);
});

it('should end a round with a message',
function() {

  const card1 = new Card(1, 'What is Fleur\'s favorite animal', ['coelocanth', 'parrot', 'river dolphin'], 'river dolphin');
  const card2 = new Card(14, 'What man is Abigail missing?', ['Jeff', 'Richard', 'Keith'], 'Richard');
  const card3 = new Card(12, 'What is Larry\'s middle name?', ['Soldier', 'Princess', 'Scooter'], 'Princess');

  const deck = new Deck([card1, card2, card3]);

  const round = new Round(deck);

  round.takeTurn('river dolphin');
  round.takeTurn('Jeff');
  round.takeTurn('Princess');

  round.endRound();

  expect(round.endRound()).to.equal(`** Round over! ** You answered 66% of the questions correctly!`);
});
