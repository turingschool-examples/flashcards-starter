const Turn = require('../src/Turn');


class Round {
  constructor(currentCard, turns) {
    this.currentCard = currentCard
    this.turns = 0
    this.incorrectGuesses = []
  }
  takeTurn(guess) {
    this.turns++
    let turn = new Turn(guess, this.currentCard)
    return turn

  }
  returnCurrentCard() {
    return this.currentCard
  }
}

module.exports = Round;


/*Notes/questions

Need to add the deck next

feedback given in turn and round?

Accessing between files. rules and such..

Command line interface is... console logs?

What are the important lessons here?

Not doing this right and I think I'm ok with that?..



*/
