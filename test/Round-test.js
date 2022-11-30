const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { prototype } = require('../src/Card');

describe ('Round', function() {
  
  let card1, card2, card3, deck, round

  beforeEach('assign values to global variables', function () {
    card1 = new Card (6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
    card2 = new Card (7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")
    card3 = new Card (8, "What do iterator methods take in as their first argument?", ["callback function", "current element", "an array"], "callback function")
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
   
  })

  it.skip('should be a function', function() {
    
    expect(Round).to.be.a('function')
  })

  it.skip('should be an instance of a Round', function() {
   
    expect(round).to.be.an.instanceof(Round)
  })

  it.skip('should take a new set of cards', function() {
    
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it.skip('should show the current card at play from deck', function() {

    expect(round.returnCurrentCard).to.deep.equal({ //this.deck.set[0]
      "id": 6,
      "question": "What is an example of a mutator method?",
      "answers": ["sort()", "map()", "join()"],
      "correctAnswer": "sort()"
    })
  })

  it.skip('should start user\'s turn at 0', function() {
    
    expect(round.turns).to.equal(0) //increment/decrement
  }) 

  it.skip('should start empty to have a record of incorrect guesses', function() {
    
    expect(round.incorrectGuesses).to.equal([]) //push into array incorrectGuess(turn.attempt/turn.currentCard)
  })

  it.skip('should show if the guess is correct', function() {
    
    expect(round.takeTurn()).to.equal('correct!') //turn.giveFeedback()  
  })
  
  it.skip('should show if the guess is incorrect', function() {
    
    expect(round.takeTurn()).to.equal('incorrect!') //turn.giveFeedback()
  })

  it.skip('should account for the turns taken', function() {
    
    expect(round.turns).to.equal(2)
  })

  it.skip('should record the card of the incorrect guess', function() {
    
    expect(round.incorrectGuesses).to.equal([7]) //deck[i].card.id
  })

  it.skip('should give next card from the deck after answer attempts', function() {
    
    expect(round.returnCurrentCard).to.deep.equal({
      "id": 8,
      "question": "What do iterator methods take in as their first argument?",
      "answers": ["callback function", "current element", "an array"],
      "correctAnswer": "callback function"
    })
  })

  it.skip('should calculate overall correct answers', function() {
    expect(round.calculatePercentCorrect()).to.equal(50)
  })

})