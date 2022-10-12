const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/round');
const Card = require('../src/Card');
const Deck = require('../src/deck');


describe('Round', function() {
    let deck, card1, card2, card3, round;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    })
    
    it('should take in the cards in a deck', () => {

        expect(round.deck).to.deep.equal(deck.cards);
    })

    it('should keep track of the current card in the deck', () => {

        expect(round.currentCard).to.deep.equal(card1);
    })

    it('should have a method that returns the current card being played', () => {

        const currentCard1 = round.returnCurrentCard()
        
        expect(currentCard1).to.deep.equal(card1);
    })

    it('should start with 0 turns at the beginning of the round', () => {
    
        expect(round.numOfTurns).to.equal(0);
    })

    it('should start with no incorrect guesses', () => {

        expect(round.incorrectGuesses).to.deep.equal([]);
    })


    it('should have a method that updates the turn property', () => {

        round.takeTurn('sea otter');

        expect(round.numOfTurns).to.equal(1);
    })

    it('should be able to evaluate guesses to be correct', () => {

        const displayOutcome = round.takeTurn('sea otter');

        expect(displayOutcome).to.equal("correct!");
    })

    it('should be able to evaluate guesses to be incorrect', () => {

        let displayOutcome = round.takeTurn('pug');

        expect(displayOutcome).to.equal("incorrect!");
    })

    it('should move to the next card once the guess have been evaluated', () => {

        expect(round.currentCard).to.deep.equal(card1);

        round.takeTurn('sea otter');

        expect(round.currentCard).to.deep.equal(card2);
        expect(round.returnCurrentCard()).to.deep.equal(card2);

        round.takeTurn('appendix')

        expect(round.currentCard).to.deep.equal(card3);
        expect(round.returnCurrentCard()).to.deep.equal(card3);
    });

    it('should record incorrect guesses', () => {
        
        let outcome = round.takeTurn('pug');

        expect(outcome).to.equal('incorrect!');
        expect(round.incorrectGuesses).to.deep.equal([1]);

        let outcome2 = round.takeTurn('spleen');

        expect(round.incorrectGuesses).to.deep.equal([1, 14]);
    })

    it('should calculate the percentage of correct answers', () => {

        round.takeTurn('sea otter');

        round.takeTurn('spleen');

        let score = round.calculateScore();

        expect(score).to.equal(50);
    })
})