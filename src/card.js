const createCard = (id, question, answers, correctAnswer) => {
    return card = {
        id: id, 
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }
}

const evaluateGuess = (guest, correctAnswer) => {
    if(guest === correctAnswer){
        return "correct!"
    } else {
        return "incorrect!"
    }
}

const createDeck = (cards) => {
    return cards;
  }

const countCards = (deck) => {
    return deck.length
}

const createRound = (deck) => {
    const round = {
      deck: deck,
      currentCard: deck[0],
      turns: 0,
      incorrectGuesses: [],
    };
  
    round.takeTurn = (guess) => {
      round.turns++;
      const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  
      if (feedback === 'incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id);
      }
  
      const currentIndex = deck.indexOf(round.currentCard);
      round.currentCard = deck[currentIndex + 1];
  
      return feedback;
    };
  
    round.calculatePercentCorrect = () => {
      const correctGuesses = round.turns - round.incorrectGuesses.length;
      return (correctGuesses / round.turns) * 100;
    };
  
    round.endRound = () => {
      const percentCorrect = round.calculatePercentCorrect();
      console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
    };
  
    return round;
  };

module.exports = {
    createCard,
    evaluateGuess,
    createDeck,
    countCards,
    createRound
}