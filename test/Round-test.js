const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');

const chai = require('chai');
const expect = chai.expect;

let card1, card2, card3, cards, deck, round
//make sure youre looking at all the files including the freebies that came with repo
beforeEach( () => {
  card1 = new Card(6, 'What is an example of a mutator method?',['sort()', 'map()', 'join()'], 'sort()');
  card2 = new Card(8, 'What do iterator methods take in as their first argument?', ['callback function', 'current element', 'an array'], 'callback function')
  card3 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array')
  cards = [card1, card2, card3]
  deck = new Deck(cards)
  round = new Round(deck)
})

describe('Round', () => {

  it.only('should instantiate a Round', () => {

    expect(round).is.an.instanceOf(Round);
  })

  it.only('should store deck', () => {

    expect(round.deck).to.equal(deck)
  })

  it.only('should have a default turn count of 0', () => {

    expect(round.turns).to.equal(0)
  })

  it.only('should have a current card that is first card in deck', () => {

    expect(round.currentCard).to.equal(round.deck.cards[0])
  })

  it.only('should store incorrect guesses in array', () => {

    expect(round.incorrectGuesses).to.deep.equal([])
  })
})

describe('returnCurrentCard', () => {

  it.only('should be a method', () => {

    expect(round.returnCurrentCard).to.be.a('function')
  })

  it.only('should return the current card being played', () => {

    expect(round.returnCurrentCard()).to.equal(round.currentCard)
  })
})

describe('takeTurn', () => {

  it.only('should be a method', () => {

    expect(round.takeTurn).to.be.a('function')
  })

  it.only('should update turn count', () => {

    round.takeTurn()

    expect(round.turns).to.equal(1)
  })
  
  it.only('should change the next card in the deck to current card', () => {
    // the next card in the deck this.deck.cards[1] 
    // needs to be assigned to this.currentCard
    round.takeTurn()
    
    expect(round.currentCard).to.deep.equal(round.deck.cards[round.turns])
  })

    it.only('should evalute if user\'s guess is correct', () => {
      // it should evalute guess
      // how does it evalute the guesses? in the turn class
      // >>> turn.guess ==== this.card.correctAnswer ? true : false
      // method should call turn.evaluteGuess()
      // check if turn(guess) === round.takeTurn

      let turn = new Turn('sort()', card1) // should get a true boolean from turn.evaluteGuess()
    
      // round.takeTurn('sort()')
  
     expect(round.takeTurn('sort()')).to.equal(turn.evaluateGuess())
    })

    it.only('should evalute if user\'s guess is incorrect', () => {
      let turn = new Turn('wrongAnswer', card1)
    
      round.takeTurn()
  
     expect(round.takeTurn()).to.equal(turn.evaluateGuess())
    })

    it.only('should store incorrect guesses in an array by ID', () => {
      // let turn = new Turn('map()', card1)
      // console.log('turn test side: ', turn)
      round.takeTurn('wrongAnswer')
      //should push incorrect guesses ID into incorrectGuesses array
      //if round.takeTurn(guess) == false then
      //how can i manipulate the guess to make it false? 
      expect(round.incorrectGuesses).to.have.lengthOf(1)
    })

    // it.only('should give \'correct!\' feedback if correct', () => {

    //   expect(round.takeTurn('sort()')).to.equal('correct!')
    // })

    // it.only('should give \'incorrect!\' feedback if incorrect', () => {

    //   expect(round.takeTurn('wrongAnswer')).to.equal('incorrect!')
    // })
})

describe('calculatePercentCorrect', () => {

  it.only('should be a method', () => {

    expect(round.calculatePercentCorrect).to.be.a('function')
  })

  it.only('should return the percentage of correct guesses', () => {
    
    round.takeTurn()
    round.takeTurn()

    expect(round.calculatePercentCorrect()).to.equal(.5)
  })
})