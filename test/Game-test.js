const chai = require('chai');
const expect = chai.expect;

const cardData = require('../src/data');
const prototypeQuestions = cardData.prototypeData;
// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
const Round = require('../src/Round');
// const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', () => {
    let game;
    beforeEach(() => {
        game = new Game();

    });

    it('should be a function', () => {
        expect('Game').to.be.a('function');

    });

    it('should keep track of current round', () => {
        expect(game.currentRound).to.be.a.instanceOf(Round);

    });

    it('should start a game', () => {
        expect(game.start).to.be.a('function');

    });

    it('should create cards', () => {
        game.start();
        expect(game.deck.cards).to.deep.equal(prototypeQuestions);

    });

    it('should create new round using deck', () => {
        game.newRound();
        expect(game.round.currentCard).to.equal(prototypeQuestions[0]);

    });

    it('should display guess feedback', () => {
        game.round.currentTurn.turnHandeler(game.currentCard.answers[0], game.deck.cards[1]);
        const feedback = game.printMessage;
        expect(feedback).to.equal('correct!');

    });

    it('should print next question', () => {
        const nextQuestion = game.printQuestion();
        expect.apply(nextQuestion).toEqual(prototypeQuestions[0].question);

    });

});

