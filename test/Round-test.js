const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');
const prototypeData = require('../src/data.js');

describe('Round', function() {
        const card1 = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const card2 = new Card(2, 'What organ is Courtney missing?', ['kidney', 'appendix', 'gallbladder'], 'appendix');
        const card3 = new Card(3, 'What is Lucas\'s middle name?', ['John', 'Jose', 'Xavier'], 'Xavier');
        const card4 = new Card(4, 'What color is the sky?', ['red', 'green', 'blue'], 'Blue');
        const card5 = new Card(5, 'Where does Courtney live?', ['Texas', 'Montana', 'Colorado'], 'Colorado');
        const deck = new Deck([card1, card2, card3, card4, card5]);
        let round;

    beforeEach(function () { 
       round = new Round(deck);
      });

    it('should instantiate a Round with a Deck object', () => {
        
        expect(round.deck).to.deep.equal([card1, card2, card3, card4, card5])

    });

    it('should have a returnCurrentCard method that returns the current card being played', () => {

        expect(round.returnCurrentCard()).to.deep.equal({
            id: 1,
            question: "What is Courtney's favorite animal?",
            answers: [ 'bee', 'horse', 'platypus' ],
            correctAnswer: 'bee'
          })

    });

    it('should have the currentCard be the first Card in the Deck at start of Round', () => {

        expect(round.returnCurrentCard()).to.deep.equal(round.deck[0])


    });

    it('should have a takeTurn method that when a guess is made, a new Turn instance is created', () => {
            round.takeTurn('bee')
        expect(round.turn).to.deep.equal({
            guess: 'bee',
            card: {
                id: 1,
                question: "What is Courtney's favorite animal?",
                answers: [ 'bee', 'horse', 'platypus' ],
                correctAnswer: 'bee'
             }
        });
    

    });

    it('should update turns count, regardless of whether the guess is correct or incorrect', () => {

        expect(round.turns).to.deep.equal(0)

        round.takeTurn('bee')

        expect(round.turns).to.equal(1)

        round.takeTurn('gallbladder')
        round.takeTurn('Xavier')

        expect(round.turns).to.equal(3)

    });

    it('should have the next card become the current card', () => {
        
        expect(round.returnCurrentCard()).to.deep.equal({
            id: 1,
            question: "What is Courtney's favorite animal?",
            answers: [ 'bee', 'horse', 'platypus' ],
            correctAnswer: 'bee'
         })

          round.takeTurn('gallbladder')

          expect(round.returnCurrentCard()).to.deep.equal({
            id: 2,
            question: "What organ is Courtney missing?",
            answers: [ 'kidney', 'appendix', 'gallbladder' ],
            correctAnswer: 'appendix'
          })


    });

    it('should evaluate and record the guess', () => {
            round.takeTurn('bee')

        expect(round.currentGuess).to.equal('bee')

        round.takeTurn('gallbladder')

        expect(round.currentGuess).to.equal('gallbladder')

    });

    it('should store incorrect guesses via id in an array of incorrectGuesses', () => {

        round.takeTurn('bee')
        
        expect(round.incorrectGuesses).to.deep.equal([])

        round.takeTurn('gallbladder')

        expect(round.incorrectGuesses).to.deep.equal(['gallbladder'])

    });

    it('should return feedback regarding whether the guess is incorrect or correct', () => {
        const card1 = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const card2 = new Card(2, 'What organ is Courtney missing?', ['kidney', 'appendix', 'gallbladder'], 'appendix');
        const card3 = new Card(3, 'What is Lucas\'s middle name?', ['John', 'Jose', 'Xavier'], 'Xavier');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);


        expect(round.takeTurn('bee')).to.equal('correct!')
        expect(round.takeTurn('kidney')).to.equal('incorrect!')

    });

    it('should have a calculatePercentCorrect method that calculates and returns the percent of correct guesses', () => {

        round.takeTurn('bee')
        round.takeTurn('kidney')

        expect(round.calculatePercentCorrect()).to.equal(50)

        round.takeTurn('Xavier')

        expect(round.calculatePercentCorrect()).to.equal(67)

    });

    it('should have an endRound method that prints the following to the console: "** Round over! ** You answered <>% of the questions correctly!"', () => {


        round.takeTurn('bee')
        round.takeTurn('kidney')
        round.takeTurn('Xavier')

        expect(round.endRound()).to.equal('** Round over! ** You answered 67% of the questions correctly!')

    });
});