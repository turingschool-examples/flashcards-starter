const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const prototypeData = require('../src/data');


describe("Deck", function () {

    it("should be a function", function () {
        const deck = new Deck();
        expect(Deck).to.be.a("function");
    });

    it("should be an instance of Deck", function () {
        const deck = new Deck();
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it("should have a method to keep track of the cards in the deck", function () {
        const deck = new Deck([prototypeData]);
        expect(deck.countCards).to.equal(30);
    });
});