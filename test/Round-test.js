const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Game = require('../src/Game');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
    });

    it('should have a deck of cards', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      let currentDeck = [card1, card2, card3];
      let deck = new Deck(currentDeck);
      let round = new Round(deck);
      expect(round.deck).to.equal(deck);
  });

    it('should be able to keep track of turns and start with 0 turns', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      let currentDeck = [card1, card2, card3];
      let deck = new Deck(currentDeck);
      let round = new Round(deck);
      expect(round.turn).to.equal(0);
    });

    it('should return the current card on each turn', () => {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      let currentDeck = [card1, card2, card3];
      let deck = new Deck(currentDeck);
      let round = new Round(deck);
      round.turn = 0;
      expect(round.returnCurrentCard()).to.equal(round.deck.currentDeck[0]);
    });

    it('should evaluate the guess', () => {
      let currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      let turn = new Turn('sea otter', currentCard);
      expect(turn.evaluateGuess(currentCard)).to.equal(true);
    });

      it('it should let the user know if guess was correct or incorrect', () => {
        let currentCard = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        let turn = new Turn('sea otter', currentCard);
        turn.evaluateGuess();
        expect(turn.giveFeedback()).to.equal('Correct!');
      });

      it('should keep track of all incorrect guesses', () => {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        let currentDeck = [card1, card2, card3];
        let deck = new Deck(currentDeck);
        let round = new Round(deck);
        let turn = new Turn('pug', card1);
        round.takeTurn('pug', card1)
        expect(round.incorrectGuesses).to.deep.equal([1]);
      });

      it('should calculate the percent of total correct guesses', () => {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        let currentDeck = [card1, card2, card3];
        let deck = new Deck(currentDeck);
        let round = new Round(deck);
        let turn = new Turn('spleen', card2);
        round.takeTurn('pug', card1);
        round.calculatePercentCorrect();
        expect(round.calculatePercentCorrect()).to.equal(`0%`);
      });
});
