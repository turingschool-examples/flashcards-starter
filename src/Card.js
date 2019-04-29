//example Card
const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

//example Turn
const turn = new Turn('pug', card);

turn.returnGuess()    // => 'pug'


turn.returnCard()     // => { id: 1,
//      question: 'What is Robbie\'s favorite animal',
//      answers: ['sea otter', 'pug', 'capybara'],
//      correctAnswer: 'sea otter' 
//    }


turn.evaluateGuess()  // => false


turn.giveFeedback()    // => incorrect!