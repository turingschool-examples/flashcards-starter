const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

    it('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Card', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceOf(Turn)
    });

    it('should store a guess', function() {
        const turn = new Turn('pug');
        expect(turn.guess).to.deep.equal('pug')
    });

    it('should store a card object', function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('pug', card)
        expect(turn.card).to.deep.equal(card)
    });

    it("should default to a player having lost", function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('sea otter', card)
        expect(turn.won).to.equal(false)
    });

    it("should return a player's guess", function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('pug', card)
        expect(turn.returnGuess()).to.equal('pug')
     });
    
    it("should return a player's card", function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('pug', card)
        expect(turn.returnCard()).to.deep.equal({ id : 1, question:'What is Robbie\'s favorite animal',answers:['sea otter','pug', 'capybara'], correctAnswer:'sea otter' })
    });

    it("should evaluate user's guess to see if equal to correctAnswer", function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('pug', card)
        expect(turn.evaluateGuess(card)).to.equal(false);
    });
    

    it("should allow a player to have won", function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('sea otter', card)
        turn.evaluateGuess(card);
        expect(turn.won).to.equal(true);
    })

    it("should give feedback if user's guess was incorrect", function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('pug', card)
        
        expect(turn.giveFeedBack()).to.equal('Incorrect!')
    });

    it("should give feedback if user's guess was correct", function() {
        const card = new Card(1,'What is Robbie\'s favorite animal',['sea otter','pug', 'capybara'],'sea otter')
        const turn = new Turn('sea otter', card);
        expect(turn.giveFeedBack()).to.equal('Correct!')
    });
});
