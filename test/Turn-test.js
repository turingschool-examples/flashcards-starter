const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');




describe('Turn', function() {
   it('should be instantiated with a string that represents a user\'s guess', () => {
        const turn1 = new Turn ('array');

        expect(turn1.guess).to.equal('array');
    });

    it('should be instantiated with a Card object.', () => {
        const card = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const turn1 = new Turn ('horse', card);

        expect(turn1.card).to.deep.equal({id: 1, question: 'What is Courtney\'s favorite animal?', answers: ['bee', 'horse', 'platypus'], correctAnswer: 'bee'});
    });

    it('should have a returnGuess method that returns the guess', () => {
        const card = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const turn1 = new Turn ('horse', card);

        expect(turn1.returnGuess()).to.equal('horse');
    });

    it('should have a returnCard method that returns the Card', () => {
        const card = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const turn1 = new Turn ('horse', card);

        expect(turn1.returnCard()).to.deep.equal({id: 1, question: 'What is Courtney\'s favorite animal?', answers: ['bee', 'horse', 'platypus'], correctAnswer: 'bee'});
    });

    it('should have an evaluateGuess method that returns a boolean indicating if the user\'s guess matches the correct answer on the card.', () => {
        const card = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const turn1 = new Turn ('horse', card);
        const turn2 = new Turn ('bee', card);

        expect(turn1.evaluateGuess()).to.equal(false);
        expect(turn2.evaluateGuess()).to.equal(true);
    });

    it('should have a giveFeedback method that returns either "incorrect!" or "correct!" based on whether the guess is correct or not.', () => {
        const card = new Card(1, 'What is Courtney\'s favorite animal?', ['bee', 'horse', 'platypus'], 'bee');
        const turn1 = new Turn ('horse', card);
        const turn2 = new Turn ('bee', card);

        expect(turn1.giveFeedback()).to.equal('incorrect!');
        expect(turn2.giveFeedback()).to.equal('correct!');

    });

});
