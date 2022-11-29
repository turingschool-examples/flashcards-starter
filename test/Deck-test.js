const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe("Deck", function () {
    let card1;
    let card2;
    let card3;
    let deck;

    this.beforeEach(() => {
        card1 = new Card(2, "What is a comma-separated list of related values?", ["object", "array", "function"], "array");
        card2 = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method");
        card3 = new Card(12, "Which iteration method returns an array of the same length as the original array?", ["map()", "forEach()", "reduce()"], "map()");
        deck = new Deck([card1, card2, card3]);
    })
it("should be a function", () => {
    expect(Deck).to.be.a('function')
})

it("should be an instance of deck", () => {
    expect(deck).to.be.an.instanceOf(Deck)
})

it('should be able to store an array of cards', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
})

it('should be able count cards in array', () => {
    expect(deck.cardAmount()).to.equal(3);
})
})