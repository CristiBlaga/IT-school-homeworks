const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw! &#x1F604"
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = "you win! &#x1F60A"
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = "you lost! &#x1F641"
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = "you win! &#x1F60A"
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = "you lost! &#x1F641"
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = "you win! &#x1F60A"
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = "you lost! &#x1F641"
    }
    resultDisplay.innerHTML = result
}