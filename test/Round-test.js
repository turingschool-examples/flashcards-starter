const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');

describe('Round', () => {
  let deck;
  let round;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    card1 = new Card(1, 'What is Harry Potter\'s patronus?', ['horse', 'otter', 'stag'], 'stag');
    card2 = new Card(14, 'What does Dumbledore give Ron in his will?', ['deluminator', 'invisibility cloak', 'wand'], 'deluminator');
    card3 = new Card(12, 'What does the Imperius Curse do?', ['kills', 'controls', 'mimics'], 'controls');
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();

    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should indicate the number of turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should record an array of incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should update turn count', () => {
    expect(round.turns).to.equal(0);

    round.takeTurn('horse');
    expect(round.turns).to.equal(1);

    round.takeTurn('wand');
    round.takeTurn('controls');
    expect(round.turns).to.equal(3)
  });

  it('should update the current card with the next card', () => {
    round.takeTurn('horse');
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.deep.equal(card2);

    round.takeTurn('deluminator');
    expect(round.turns).to.equal(2);
    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should have incorrect guesses set to empty by default', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should record incorrect guesses', () => {
    round.takeTurn('horse');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should return feedback on whether the answer is correct or incorrect', () => {
    round.takeTurn('horse');
    expect(round.takeTurn()).to.equal('incorrect!');
  });

  it('should calculate the percentage of cards guessed correct', () => {
    round.takeTurn('stag');
    round.takeTurn('invisibility cloak');
    round.takeTurn('mimics');
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should print a message when the round is over', () => {
    round.takeTurn('stag');
    round.takeTurn('invisibility cloak');
    round.takeTurn('mimics');
    round.calculatePercentCorrect();
    round.endRound()

    expect(round.endRound()).to.equal('**Round over!** You answered 33% of the questions correctly!');
  });
})
