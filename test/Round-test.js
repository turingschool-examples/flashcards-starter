const chai = require('chai');
const expect = chai.expect
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');



describe('Round', () => {
  let deck;
  let card1;
  let card2;
  let card3;
  let round;
  beforeEach( () => {
    card1 = new Card(1, 'Between Ron Weasley, Hermione Granger, and Harry Potter, who was acknowledged as being the best at spells?', ['Hermione', 'Ron', 'Harry'], 'Hermione');
    card2 = new Card(2, 'How many siblings does Ron Weasley have?', ['4', '5', '6'], '6');
    card3 = new Card(3, `Which of these subjects did Severus Snape NOT teach at Hogwart's School of Witchcraft and Wizardry?`, ['Potions', 'Defense Against the Dark Arts', 'Transfiguration'], 'Transfiguration');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it(`should store the deck of flash cards currently being used`, () => {
    expect(round.currentDeck.deck.length).to.deep.equal(3);
  });

  it('should return the currentCard being played', () => {
    expect(round.returnCurrentCard(deck)).to.deep.equal(deck.deck[0]);
  });

  it('should store incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should keep track of turns taken', () => {
    expect(round.turns).to.equal(0);
    round.takeTurn('Hermione', card1);
    expect(round.turns).to.equal(1);
    round.takeTurn('6', card2);
    expect(round.turns).to.equal(2);
  });

  it('should store the id of incorrect answers', () => {
    round.takeTurn('Ron');
    expect(round.incorrectGuesses[0]).to.equal(1);
    expect(round.incorrectGuesses.length).to.deep.equal(1);
    round.takeTurn('6');
    expect(round.incorrectGuesses.length).to.deep.equal(1);
    round.takeTurn('Potions');
    expect(round.incorrectGuesses.length).to.deep.equal(2);
    expect(round.incorrectGuesses[1]).to.equal(3);
  });

  it('should give appropriate feedback for correct/incorrect answer', () => {
    expect(round.takeTurn('Ron')).to.deep.equal('incorrect!');
    expect(round.takeTurn('6')).to.deep.equal('correct!');
  });

  it('should be able to calculate and return the percentage of correct answers', () => {
    round.takeTurn('Ron');
    round.takeTurn('6');
    round.takeTurn('Potions');
    expect(round.calculatePercentCorrect()).to.deep.equal(33.33333333333333);
  });

  it('should print a message declaring the round is over and declaring the final score', () => {
    round.takeTurn('Ron');
    round.takeTurn('6');
    round.takeTurn('Potions');
    expect(round.endRound()).to.deep.equal('** Round Over ** You answered 33.33333333333333% of the questions correctly!');
  });

});
