const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
// const Turn = require('../src/Turn');


describe('Round', () => {
  let round, deck, card1, card2, card3, card4, card5;

  beforeEach(() => {
    card1 = new Card(1, 'What is Joe\'s favorite color?', ['orange', 'purple', 'yellow', 'red'], 'orange');
    card2 = new Card(2, 'What is the capital of Pennsylvania?', ['Idaho', 'Pittsburgh', 'Harrisburg', 'Paris'], 'Harrisburg');
    card3 = new Card(3, 'Can you not?', ['NO WAY', 'Maybe??', 'YEP', 'A little'], 'YEP');
    card4 = new Card(4, 'How old is Joe?', [15, 29, 42, 20], 29);
    card5 = new Card(5, 'Where does Joe live?', ['Philadelphia', 'Pittsburgh', 'Harrisburg', 'Paris'], 'Philadelphia');

    cards = [card1, card2, card3, card4, card5];

    deck = new Deck(cards);

    round = new Round(deck);
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have a deck', () => {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should have a current card equal to the first card in the deck', () => {
    expect(round.currentCard).to.deep.equal(deck.cards[0]);
  });

  it('should have a turn counter that initializes at zero', () => {
    expect(round.turns).to.equal(0);
  });

  it('should have an array to keep track of incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to return the current card', () => {
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  });

  it('should be able to take a turn', () => {
    expect(round.takeTurn('purple')).to.equal('incorrect!');
    expect(round.turns).to.equal(1);
    expect(round.currentCard).to.deep.equal(deck.cards[1]);
    expect(round.incorrectGuesses[0]).to.equal(1);

    expect(round.takeTurn('Harrisburg')).to.equal('correct!');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.currentCard).to.deep.equal(deck.cards[2]);
  });

  it('should be able to calculate the percent correct', () => {
    round.takeTurn('purple'); // incorrect
    round.takeTurn('Paris'); // incorrect
    round.takeTurn('YEP'); // correct
    round.takeTurn(29); // correct
    round.takeTurn('Philadelphia'); // correct

    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses[1]).to.equal(2);
    expect(round.turns).to.equal(5);
    expect(round.calculatePercentCorrect()).to.equal(60);
  });

  it('should be able to end a round', () => {
    round.takeTurn('purple'); // incorrect
    round.takeTurn('Harrisburg'); // correct
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});