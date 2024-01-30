const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('createDeck', function() {
    it('should be a function', function() {
        expect(createDeck).to.be.a('function');
    });

    it('should create an array of the cards', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');
        
        const deck = createDeck([card1, card2, card3]);

        expect(deck).to.deep.equal([card1, card2, card3]);
    });
});

describe('countCards', function() {
    it('should be a function', function() {
        expect(countCards).to.be.a('function');
    });

    it('should count the amount of cards in the deck', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');

        const deck = createDeck([card1, card2, card3]);
        const numberOfCards = countCards(deck);

        expect(numberOfCards).to.equal(3);
    });

    it('should count a different amount of cards in the deck', function() {
        const card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        const card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        const card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');
        const card4 = createCard(23, 'What is Cory\'s favorite animal', ['sloth', 'turtle', 'lion'], 'sloth')
        const card5 = createCard(30, 'What mod is Cory in', ['Mod1', 'Mod2', 'Mod3'], 'Mod2')

        const deck = createDeck([card1, card2, card3, card4, card5]);
        const numberOfCards = countCards(deck);

        expect(numberOfCards).to.equal(5);
    });
});