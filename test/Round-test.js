const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {
    let card, card1, card2, card3, cards, deck, round, turn, wrongAnswers;

    beforeEach(function() {
        card = new Card({cardIdNumber: this.cardIdNumber, question: this.question, answers: this.answers, correctAnswer: this.correctAnswer});
        cards = [
        card1 = new Card(),
        card2 = new Card(),
        card3 = new Card(),
        ]
        deck = new Deck(cards);
        round = new Round(deck);
        turn = new Turn('userGuess', deck.cards);
    });
    it('should be a function', function() {
          expect(Round).to.be.a('function');
    });
    it('should be an instance of Round', function() {
        expect(round).to.be.an.instanceOf(Round);
    });
    it('should start with first card of the deck as default', function() {
        expect(round.currentCard).to.equal(round.deck[0]);
    });
    it('should keep track of the number of turns', function() {
        expect(round.turnCount).to.equal(0);
      });
    it('should update turn count', function() {
        round.takeTurn();
        round.takeTurn();
        round.takeTurn();
        expect(round.turnCount).to.equal(3);
    });  
    it('should be able to shuffle cards', function() {
        expect(round.returnCurrentCard()).to.equal(round.deck.cards[card1]);
        round.takeTurn();
        round.takeTurn();
        round.takeTurn();
    });
    it('should store incorrect guesses', function() {
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
    it('should store correct guesses', function() {
        expect(round.correctGuesses).to.deep.equal([]);
    });
    it('should give feedback regardless of whether the guess is incorrect or correct', function(){
        expect(round.takeTurn()).to.equal(`correct!` || `incorrect!`);
    });
    it('should be able to calculate percentage of correct answers', function(){
        expect(round.calculatePercentCorrect()).to.equal(wrongAnswers);
        //I need this to be a function 
        //which calculates the number of cards in the deck
        //and divides that number by the total number of elements in the incorrectGuesses array
        //needs to take 
    });
});