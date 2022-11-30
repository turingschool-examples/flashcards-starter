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

  it('should be a function', function() {
    
    expect(Round).to.be.a('function')
  })

  it('should be an instance of a Round', function() {
   
    expect(round).to.be.an.instanceof(Round)
  })

  it('should take a new set of cards', function() {
    
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it('should show the current card at play from deck', function() {

    expect(round.returnCurrentCard).to.deep.equal({ //this.deck.set[0]
      "id": 6,
      "question": "What is an example of a mutator method?",
      "answers": ["sort()", "map()", "join()"],
      "correctAnswer": "sort()"
    })
  })

  it('should start user\'s turn at 0', function() {
    //expect(round.turns).to.equal(0) //increment/decrement
  }) 

  it('should take a record of incorrect guesses', function() {
    //expect(round.incorrectGuesses).to.equal([]) //push into array incorrectGuess(turn.attempt/turn.currentCard)
  })

  it('should account for the correct and incorrect answers', function() {
    //round.takeTurn() --> 'correct!' //turn.giveFeedback()
    //round.takeTurn() --> 'incorrect!' //turn.giveFeedback()
  })

  it('should show the amount of turns taken', function() {
    //expect(round.turns).to.equal(2)
  })

  it('should record the card of the incorrect guess', function() {
     //expect(round.incorrectGuesses).to.equal([7]) //deck[i].card.id
  })

  it('should give next card from the deck after answer attempts', function() {
    //card3
  })

  it('should calculate overall correct answers', function() {
    //round.calculatePercentCorrect()
  })

})