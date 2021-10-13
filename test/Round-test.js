/* eslint-disable indent */
const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Round', function() {
    it('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function () {
        const round = new Round();
        expect(round).to.be.an.instanceof(Round);
    });

    it('should return the current card being played', function() {
        const card1 = new Card(1, "What is the longest river in the world?", ["Nile", "Amazon", "Mississippi"], "Nile");
        const card2 = new Card(2, "What is the fastest land animal?", ["Panther", "Cheetah", "A human running to the bathroom"], "Cheetah");
        const card3 = new Card(3, "What actor played as Doctor Strange?", ["Burlington Candlestick", "Butterfree Crumplesnap", "Benedict Cumberbatch"], "Benedict Cumberbatch");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.deep.equal(card1);
    });

    it('should update the turn count', function () {
        const card1 = new Card(1, "What is the longest river in the world?", ["Nile", "Amazon", "Mississippi"], "Nile");
        const card2 = new Card(2, "What is the fastest land animal?", ["Panther", "Cheetah", "A human running to the bathroom"], "Cheetah");
        const card3 = new Card(3, "What actor played as Doctor Strange?", ["Burlington Candlestick", "Butterfree Crumplesnap", "Benedict Cumberbatch"], "Benedict Cumberbatch");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn("Amazon", card1);
        expect(round.turns).to.equal(1);
        expect(round.returnCurrentCard()).to.deep.equal(card2);
    });


    it('should give feedback', function() {
        const card1 = new Card(1, "What is the longest river in the world?", ["Nile", "Amazon", "Mississippi"], "Nile");
        const card2 = new Card(2, "What is the fastest land animal?", ["Panther", "Cheetah", "A human running to the bathroom"], "Cheetah");
        const card3 = new Card(3, "What actor played as Doctor Strange?", ["Burlington Candlestick", "Butterfree Crumplesnap", "Benedict Cumberbatch"], "Benedict Cumberbatch");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        expect(round.takeTurn("Amazon", card1)).to.equal("false");
    })

    it('should store ids of incorrect guesses', function() {
        const card1 = new Card(1, "What is the longest river in the world?", ["Nile", "Amazon", "Mississippi"], "Nile");
        const card2 = new Card(2, "What is the fastest land animal?", ["Panther", "Cheetah", "A human running to the bathroom"], "Cheetah");
        const card3 = new Card(3, "What actor played as Doctor Strange?", ["Burlington Candlestick", "Butterfree Crumplesnap", "Benedict Cumberbatch"], "Benedict Cumberbatch");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn("Amazon", card1);
        expect(round.incorrectGuesses).to.deep.equal([1]);
    });

    it('should return the percentage of correct guesses', function () {
        const card1 = new Card(1, "What is the longest river in the world?", ["Nile", "Amazon", "Mississippi"], "Nile");
        const card2 = new Card(2, "What is the fastest land animal?", ["Panther", "Cheetah", "A human running to the bathroom"], "Cheetah");
        const card3 = new Card(3, "What actor played as Doctor Strange?", ["Burlington Candlestick", "Butterfree Crumplesnap", "Benedict Cumberbatch"], "Benedict Cumberbatch");
        const deck = new Deck([card1, card2, card3]);
        const round = new Round(deck);
        round.takeTurn("Nile", card1);
        expect(round.calculatePercentCorrect()).to.equal(100);
        round.takeTurn("Panther", card2);
        expect(round.calculatePercentCorrect()).to.equal(50);
        });

    it('should print a message when the game is done', function () {
        const card1 = new Card(1, "What is the longest river in the world?", ["Nile", "Amazon", "Mississippi"], "Nile");
        const card2 = new Card(2, "What is the fastest land animal?", ["Panther", "Cheetah", "A human running to the bathroom"], "Cheetah");
        const card3 = new Card(3, "What actor played as Doctor Strange?", ["Burlington Candlestick", "Butterfree Crumplesnap", "Benedict Cumberbatch"], "Benedict Cumberbatch");
        const card4 = new Card(4, "How many grams are in an ounce?", [24, 28, 32, 36], 28);
        const deck = new Deck([card1, card2, card3, card4]);
        const round = new Round(deck);
        round.takeTurn("Nile", card1);
        round.takeTurn("Panther", card2);
        round.takeTurn("Benedict Cumberbatch", card3);
        round.takeTurn(28, card4);
        expect(round.endRound()).to.equal('** Round over! ** You answered 75% of the questions correctly!');        
    });
});