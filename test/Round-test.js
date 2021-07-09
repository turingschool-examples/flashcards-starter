const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    card2 = new Card(
      14,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
      'playing with bubble wrap'
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

    it('should be a function', () => {
      expect(Round).to.be.a('function');
    });

    it('should instantiate a new Round', () => {
      expect(round).to.be.an.instanceof(Round);

    it('should return the first card in the deck', () => {
      const currentCard = round.returnCurrentCard();
      expect(currentCard).to.equal(card1);
      });

    it('should start with zero turns', () => {
      expect(round.turns).to.equal(0);
      });

    it('should start with no incorrect guesses', () => {
      expect(round.incorrectGuesses).to.deep.equal([]);
      });

    it('should be able to count the turns taken', () => {
      round.takeTurn('sea otter');
      expect(round.turns).to.equal(1);
      round.takeTurn('pug');
      expect(round.turns).to.equal(2);
      });

    it('should return correct for a correct guess', () => {
      const turn1 = round.takeTurn('sea otter');
      expect(turn1).to.equal('Correct!');
      });

    it('should return incorrect for an incorrect guess', () => {
      const turn1 = round.takeTurn('spleen');
      expect(turn1).to.equal('Incorrect!');
        });

        it('should make the next card the current card after a guess is made', () => {
          round.takeTurn('sea otter');
          const currentCard = round.returnCurrentCard();
          expect(currentCard).to.deep.equal(card2);
        });

        it('should store the id of an incorrect guess in an array', () => {
          round.takeTurn('sea otter');
          expect(round.incorrectGuesses.length).to.equal(0);

          round.takeTurn('spleen');
          expect(round.incorrectGuesses.length).to.equal(1);
          expect(round.incorrectGuesses).to.deep.equal([14]);

          const currentCard = round.returnCurrentCard();
          expect(currentCard).to.equal(card3);
        });

        it('should be able to calculate percent correct', () => {
          round.takeTurn('sea otter');
          round.takeTurn('spleen');
          const percent = round.calculatePercentCorrect();
          expect(percent).to.equal(50);
        });

        it('should end the round', () => {
          const spy = sinon.spy(console, 'log');
          round.takeTurn('sea otter');
          round.takeTurn('spleen');
          round.endRound();
          const string =
            '** Round over! ** You answered 50% of the questions correctly!';
          expect(spy.calledOnce).to.be.true;
          expect(spy.calledWith(string)).to.be.true;
        });
      });
