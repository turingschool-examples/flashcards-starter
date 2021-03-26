# FlashCards

---

## Overview

This is a program that simulates flashcard review for the use of study, as user's attempt to answer the multiple choice questions correctly. The questions come up one at a time and feedback is received after an answer is submitted.

![flash cards example gif](docs/run.gif)

---

## Install and Setup
1. Clone this [repository.](https://github.com/tysnj/flashcards)
  * Run `git clone git@github.com:tysnj/flashcards.git`
2. `cd` into the repository in your terminal
  * `cd flashcards/`
3. Run `npm install` in your terminal to install the library dependencies
  * To verify that it is setup correctly, run `npm test` in your terminal.
4. Run `node index.js` from the root of the project to run the program

![flash cards example gif](docs/install.gif)

---

## UX
* Users can change answer selection with the up/down arrow keys.
* User submits answer with the return key.
* User can also submit a number as their answer, but it must be a valid selection from the multiple choices presented.
* Exit the game with `Ctrl + C`

---

## Running Program Test Suites

Run test suite using the command:

```bash
npm test
```

The test results will output to the terminal.

Note: This also tests that npm is installed correctly.
---

## Credits
#### Author
<table>
    <tr>
        <td> Tyson McNutt <a href="https://github.com/tysnj">GitHub</td>
    </tr>
    </tr>
    <td><img src="https://avatars.githubusercontent.com/u/65634894?s=400&u=46221e4304ead7cc12bfd6413570fd179c573136&v=4" alt="Tyson's headshot"
 width="150" height="auto" /></td>
    </tr>
</table>


#### Technologies used

![Git](docs/git.png) Version control
![GitHub](docs/gh.png) Hosting and management
![Javascript](docs/js.png) Programming language
![Node](docs/node.jpeg) Runtime environment
![NPM](docs/npm.png) Package management
![Mocha and Chai](docs/mochachai.png) Unit testing framework and library
