const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/deck');
const Round = require('../src/round');
const expect = chai.expect;

describe('Round', () => {
    let cards, card1, card2, card3, deck1;

    beforeEach(() => {
        card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        cards = [card1, card2, card3];
        
        deck1 = new Deck(cards);
    });

    it('Should be a function', () => {
        expect(Round).to.be.a('function');
    });

    it('Should be an instance of the Round class', () => {
        let round1 = new Round(deck1);

        expect(round1).to.be.an.instanceOf(Round);
    });

    it('Should accept a deck as an argument', () => {
        let round1 = new Round(deck1);

        expect(round1.deck).to.equal(deck1.deck);
    });

    it('Should return the current card being played', () => {
        let round1 = new Round(deck1);

        let currentCard = round1.returnCurrentCard();
        
        expect(currentCard).to.equal(round1.deck[0]);
    });

    it('Should have a turns property', () => {
        let round1 = new Round(deck1);

        expect(round1.turns).to.equal(0);
    });

    it('Should have an incorrectGeusses property', () => {
        let round1 = new Round(deck1);

        expect(round1.incorrectGuesses).to.be.a('array');
    });

    it('Should create a new instance of Turn, and return if the answer is correct', () => {
        let round1 = new Round(deck1);

        let feedback = round1.takeTurn('sea otter');

        expect(feedback).to.equal('correct!');
    });

    it('Should create a new instance of Turn, and return if the answer is incorrect', () => {
        let round1 = new Round(deck1);

        let feedback = round1.takeTurn('spleen');

        expect(feedback).to.equal('incorrect!');
    });
    
    it('Should update the turn count every turn', () => {
        let round1 = new Round(deck1);

        round1.takeTurn('sea otter');
        round1.takeTurn('spleen');

        expect(round1.turns).to.equal(2);
    });

    it('Should add id\'s of incorrect guesses into incorrectGuesses', () => {
        let round1 = new Round(deck1);

        round1.takeTurn('sea otter');
        round1.takeTurn('spleen');

        expect(round1.incorrectGuesses).to.deep.equal([14]);
    });

    it('Should return the updated current card after each turn', () => {
        let round1 = new Round(deck1);

        round1.takeTurn('sea otter');
        round1.takeTurn('spleen');
        let currentCard = round1.returnCurrentCard();

        expect(currentCard).to.equal(card3);
    });

    it('Should be able to return the current correct answer percentage', () => {
        let round1 = new Round(deck1);

        round1.takeTurn('sea otter');
        round1.takeTurn('spleen');
        let percentCorrect = round1.calculatePercentCorrect();

        expect(percentCorrect).to.equal(50);
    });
});