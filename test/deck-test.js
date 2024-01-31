const chai = require('chai');
const expect = chai.expect;

const { createDeck, countCards } = require('../src/deck');
const { createCard } = require('../src/card');

describe('data beforeEach test', () => {
    var card1;
    var card2;
    var card3;
    var deck;
    beforeEach(() => {
        card1 = createCard(1, 'What is Cory\'s middle name', ['Lee', 'Stan', 'Stanley'], 'Lee');
        card2 = createCard(3, 'How old is Cory', [40, 34, 30], 34);
        card3 = createCard(17, 'Where does Cory live', ['Denver', 'London', 'New York'], 'Denver');
        deck = createDeck([card1, card2, card3]);
    });

    describe('createDeck', function() {
        it('should be a function', function() {
            expect(createDeck).to.be.a('function');
        });

        it('should create an array of the cards', function() {
            expect(deck).to.deep.equal([card1, card2, card3]);
        });
    });

    describe('countCards', function() {
        it('should be a function', function() {
            expect(countCards).to.be.a('function');
        });

        it('should count the amount of cards in the deck', function() {
            var numberOfCards = countCards(deck);

            expect(numberOfCards).to.equal(3);
        });

        it('should count a different amount of cards in the deck', function() {
            var card4 = createCard(23, 'What is Cory\'s favorite animal', ['sloth', 'turtle', 'lion'], 'sloth');
            var card5 = createCard(30, 'What mod is Cory in', ['Mod1', 'Mod2', 'Mod3'], 'Mod2');

            deck = createDeck([card1, card2, card3, card4, card5]);
            var numberOfCards = countCards(deck);

            expect(numberOfCards).to.equal(5);
        });
    });
});