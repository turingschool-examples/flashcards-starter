const chai = require('chai');
const expect = chai.expect;

const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');

describe('createRound', function() {
    it('should be a function', function() {
        expect(createRound).to.be.a('function');
    });

    it('should create an object', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        expect(round.deck).to.deep.equal([card1, card2, card3]);
        expect(round.currentCard).to.equal(card1);
        expect(round.turns).to.equal(0);
        expect(round.incorrectGuesses).to.deep.equal([]);
    });
});

describe('takeTurn', function() {
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function');
    });

    it('should add plus one to the count', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        const turn = takeTurn('Stan', round);

        expect(round.turns).to.equal(1);
        const turn2 = takeTurn(34, round);
        expect(round.turns).to.equal(2);
    });

    it('should change to the next card', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        const turn = takeTurn('Stan', round);

        expect(round.currentCard).to.equal(card2);
        
        const turn2 = takeTurn(34, round);
        
        expect(round.currentCard).to.equal(card3)
    });

    it('should evaluate the guess to provide feedback, incorrect guesses stored in incorrectGuesses array', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        const turn = takeTurn('Lee', round);

        expect(turn).to.equal('Correct!');
        expect(round.incorrectGuesses).to.deep.equal([]);
        
        const turn2 = takeTurn(30, round);
        
        expect(turn2).to.equal('Incorrect!')
        expect(round.incorrectGuesses).to.deep.equal([card2.id])
    })
});

describe('calculatePercent', function() {
    it('should be a function', function() {
        expect(calculatePercentCorrect).to.be.a('function');
    });

    it('should calculate the percent answered correctly', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        const turn1 = takeTurn('Lee', round);
        const turn2 = takeTurn(30, round);
        const turn3 = takeTurn('Denver', round);

        const percentage = calculatePercentCorrect(round);

        expect(percentage).to.equal(67);
    });

    it('should be able to round down', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        const turn1 = takeTurn('Stan', round);
        const turn2 = takeTurn(30, round);
        const turn3 = takeTurn('Denver', round);

        const percentage = calculatePercentCorrect(round);

        expect(percentage).to.equal(33);
    });
});

describe('endRound', function() {
    it('should be a function', function() {
        expect(endRound).to.be.a('function');
    });

    it('should return round over if all cards in the deck are done', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        const turn1 = takeTurn('Stan', round);
        const turn2 = takeTurn(30, round);
        const end1 = endRound(round);
        
        expect(end1).to.equal();

        const turn3 = takeTurn('Denver', round);
        const end2 = endRound(round);

        expect(end2).to.equal('** Round over! ** You answered <>% of the questions correctly!');
    });
});