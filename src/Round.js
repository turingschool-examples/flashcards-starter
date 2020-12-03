// 'use strict'

const Turn = require('../src/Turn')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

class Round {
  constructor(card) {
    this.card = card;
    this.turns = 0;
    this.rightAnswers = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard(id, question, answers, correctAnswer) {
    const card = new Card(id, question, answers, correctAnswer)
    const deck = new Deck()
    deck.currentDeck.push(card)
  }

  takeTurn(guess, card) {
    const turn = new Turn(guess, card)
    this.turn = turn
    this.turns++
    turn.evaluateGuess()
    const feedback = turn.giveFeedback()
    if (feedback === 'correct!') {
      this.rightAnswers++
    }
    this.card.id++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id)
    }
    return feedback
  }

  calculatePercentCorrect() {
    return (this.rightAnswers / this.turns) * 100
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round