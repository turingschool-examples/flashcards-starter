const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    var currentCard
    const turn = new Turn('Poe', currentCard);
    expect(Turn).to.be.a('function');
  });

  it('should have a guess as an argument', function() {
      const currentCard = new Card(1, 'What author invented the detective story?', ['Poe', 'Doyle', 'Gaboriau'], 'Poe');
      const turn = new Turn("guess", currentCard);

      expect(turn.guess).to.equal("guess");
    });

    it('returnGuess returns the guess', function() {
        const currentCard = new Card(1, 'What author invented the detective story?', ['Poe', 'Doyle', 'Gaboriau'], 'Poe');
        const turn = new Turn('Poe', currentCard);


        expect(turn.returnGuess()).to.equal('Poe');
      });

      it('returnCard returns the card', function() {
          const currentCard = new Card(1, 'What author invented the detective story?', ['Poe', 'Doyle', 'Gaboriau'], 'Poe');
          const turn = new Turn('Poe', currentCard);

          expect(turn.returnCard()).to.equal(currentCard);
        });

        it('evaluateGuess returns true if guess is correct answer', function() {
            const currentCard = new Card(1, 'What author invented the detective story?', ['Poe', 'Doyle', 'Gaboriau'], 'Poe');
            const turn1 = new Turn('Poe', currentCard);
            const turn2 = new Turn('Dickens', currentCard);

            expect(turn1.evaluateGuess()).to.equal(true);
            expect(turn2.evaluateGuess()).to.equal(false);
          });

          it('giveFeedback returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
              const currentCard = new Card(1, 'What author invented the detective story?', ['Dickens', 'Doyle', 'Gaboriau'], 'Poe');
              const turn1 = new Turn('Poe', currentCard);
              const turn2 = new Turn('Dickens', currentCard);

              expect(turn1.giveFeedback()).to.equal("correct!");
              expect(turn2.giveFeedback()).to.equal("incorrect!");
            });

          })
