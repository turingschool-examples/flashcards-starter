const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

    it('should be a function', function() {
        const round = new Round();
        expect(Round).to.be.a('function');
    });

    it('should be an instance of the Round class', function() {
        const round = new Round();
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should store a deck', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        const card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        expect(round.deck).to.deep.equal(
            {cards: 
                [
                    {id: 1, question: "Question1", answers: ["a1", "b1", "c1"], correctAnswer: "a1"
                }, 
                    {id: 2, 
                    question: "Question2", 
                    answers: ["a2", "b2", "c2"], correctAnswer: "a2"}
                ]
            }
        );
    });

    it('should start out with no turns', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        const card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        expect(round.turns).to.equal(0);
    });

    it('should start with no incorrect guesses', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        const card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        expect(round.incorrectGuesses).to.deep.equal([]);
    });


    it('should return the current card', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);
        
        expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: "Question1", answers: ["a1", "b1", "c1"], correctAnswer: "a1"});
    });

    it('should instantiate a new Turn', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        round.takeTurn();
        round.takeTurn();

        expect(round.turns).to.equal(2);
        // console.log(card2);
    });

    it('should update the current card', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        round.takeTurn();
        
        expect(round.currentCard).to.deep.equal({
            id: 2,
            question: 'Question2',
            answers: [ 'a2', 'b2', 'c2' ],
            correctAnswer: 'a2'
          });
    });

    it('should evaluate the guess and give feedback', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);
        const feedback = round.takeTurn('a1');
        

        expect(feedback).to.equal('correct!');
    });

    it('should add cards the user got wrong to the incorrect guesses', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        round.takeTurn('a2');

        expect(round.incorrectGuesses).to.deep.equal([{
            id: 2,
            question: 'Question2',
            answers: [ 'a2', 'b2', 'c2' ],
            correctAnswer: 'a2'}
        ]);
    })

    it('should calculate a score', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        round.takeTurn('a2');
        round.takeTurn('a2');

        const score = round.calculatePercentCorrect();

        expect(score).to.equal(50);
    })

    it('should print end of round and score', function() {
        const card = new Card(1, 'Question1', ['a1', 'b1', 'c1'], 'a1');
        card2 = new Card(2, 'Question2', ['a2', 'b2', 'c2'], 'a2');
        const deck = new Deck(card, card2);
        const round = new Round(deck);

        round.takeTurn('a2');
        round.takeTurn('a2');
        const end = round.endRound();
        

        expect(end).to.equal('** Round Over! ** You answered 50% of the questions correctly!')
    })

    // it.skip('should update turns count', function() {
    //     // const turn = new Turn('a');
    //     const round = new Round('a', deck.cards[0]);
        
    //     round.takeTurn();
    //     expect()
    // });
})