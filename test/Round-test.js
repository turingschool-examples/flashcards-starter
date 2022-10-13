const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const expect = chai.expect;

describe('Round', function() {

    it('should return the current card', function() {
        const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
        const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
        const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

    it('should update the current card on a new turn', function() {
        const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
        const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
        const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.deep.equal(card1);
        round.takeTurn('Swedish meatballs');
        expect(round.returnCurrentCard()).to.deep.equal(card2);
    });
    // it('should take in a deck and a guess', function() {
    //     const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
    //     const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
    //     const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
    //     const deck = new Deck([card1, card2, card3]);
    //     const round = new Round(deck);
    //     round.recordGuess('pizza');
    //     expect(round.deck).to.deep.equal(deck);
    //     expect(round.guesses[0]).to.equal('pizza');
    // });

    it('should begin by displaying the first card', function() {
        const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
        const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
        const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

    // it('should instantiate a new Turn constructor', function() {
    //     const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
    //     const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
    //     const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
    //     const deck = new Deck([card1, card2, card3]);
    //     const round = new Round(deck);
    //     round.recordGuess('pizza');
    //     round.takeTurn();
    //     expect(round.turns).to.deep.equal(new Turn('pizza', card1));
    // });

    it('should track and process new turns', function() {
        const card1 = new Card(1, 'What food is Evan craving?', ['Swedish meatballs', 'pizza', 'soup'], 'Swedish meatballs');
        const card2 = new Card(2, 'What is Evan\'s hockey team?', ['Canucks', 'Canadiens', 'Leafs'], 'Canadiens');
        const card3 = new Card(3, 'What is the capital of Maine?', ['Portland', 'Augusta', 'Bar Harbor'], 'Augusta');
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn('pizza');
        expect(round.turnCount).to.equal(1);
        round.takeTurn();
        expect(round.turnCount).to.equal(2);
    });
});