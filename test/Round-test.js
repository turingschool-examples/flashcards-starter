const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', () => {
    
    let deck;
    let round;
    let card1;
    let card2;
    let card3;
    let turn;
   
    
    beforeEach(() => {
        card1 = new Card (1, 'Where?', ['CO', 'NV', 'AZ'], 'CO')
        card2 = new Card (2, 'Where?', ['CO', 'NV', 'AZ'], 'NV')
        card3 = new Card (3, 'Where?', ['CO', 'NV', 'AZ'], 'AZ')
        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
    })


    it('should be a function', () => {
        expect(Round).to.be.a('function')
    });

    it('should be an instance of a deck', () => {
        expect(round).to.be.an.instanceOf(Round)
    });

    it('should check for deck', () => {
        expect(round.deck).to.deep.equal(deck)
    });

    it('should check first card', () => {
        expect(round.currentCard).to.equal(card1)
    });

    it('should return current card', () => {
        expect(round.returnCurrentCard()).to.be.a('object')
    });

    it('should start with zero turns', () => {
        expect(round.turns).to.equal(0)
    });

    it('should keep track of incorrect guess with ID', () => {
        expect(round.incorrectGuesses).to.be.a('array')
    });

    it('should take a turn and create new Turn class', () => {
        turn = round.takeTurn('CO');

        expect(turn).to.be.an.instanceOf(Turn)
    });
    
    it('should give feedback, Correct!', () => {
        turn = round.takeTurn('CO');

        expect(turn.feedback).to.equal('Correct!')
        expect(round.turns).to.equal(1)
    });

    it('should give incorrect feedback', () => {
        turn = round.takeTurn('NV');
        
        expect(turn.feedback).to.equal('Incorrect')
        expect(round.turns).to.equal(1)
    });

    it('should check incorrect guesses array', () => {
        turn = round.takeTurn('NV');

        expect(round.incorrectGuesses).to.deep.equal([1])
    });

    it('should go to next card each turn', () => {
        round.takeTurn('CO');
        round.takeTurn('NV');
       
        expect(round.currentCard).to.equal(card2)
    });

    it('should calculate percentage correct', () => {
        round.takeTurn('CO');
        round.takeTurn('NV');
        round.calculatePercentCorrect();

        expect(round.calculatePercentCorrect).to.equal(100)
    })


})