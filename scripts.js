//array of players

const mediumList = [
  {player: "Danilo Galinari", 
  team: "Boston Celtics",
  image: "./images/gallo.jpg"},
  {player: "TJ Warren", 
  team: "Brooklyn Nets",
  image: "./images/warren.jpg"},
  {player: "Robin Lopez", 
  team: "Cleveland Cavaliers",
  image: "./images/lopez.jpg"},
  {player: "Ish Smith", 
  team: "Denver Nuggets",
  image: "./images/smith.jpg"},
  {player: "Daniel Theis", 
  team: "Indiana Pacers",
  image: "./images/theis.jpg"},
  {player: "Joe Ingles", 
  team: "Milwaukee Bucks",
  image: "./images/ingles.jpg"},
  {
    player: "Isaiah Hartenstein",
    team: "New York Knicks",
    image: "./images/hartenstein.jpg"
  }
]

const hardList = [
  {player: "Aaron Holiday", 
  team: "Atlanta Hawks",
  image: "./images/holiday.jpg"},
  {player: "Raul Neto", 
  team: "Cleveland Cavaliers",
  image: "./images/neto.jpg"},
  {player: "Alec Burks", 
  team: "Detroit Pistons",
  image: "./images/burks.jpg"},
  {player: "JaMychal Green", 
  team: "Golden State Warriors",
  image: "./images/green.jpg"},
  {player: "Damian Jones", 
  team: "Los Angeles Lakers",
  image: "./images/jones.jpg"},
  {player: "Bryn Forbes", 
  team: "Minnesota Timberwolves",
  image: "./images/forbes.jpg"},
  {player: "Trevelin Queen", 
  team: "Philadelphia 76ers",
  image: "./images/queen.jpg"},
]    

const easyList = [
  {player: "Christian Wood", 
  team: "Dallas Mavericks",
  image: "./images/wood.jpg"},
  {player: "Bruce Brown", 
  team: "Denver Nuggets",
  image: "./images/brown.jpg"},
  {player: "John Wall", 
  team: "Los Angeles Clippers",
  image: "./images/wall.jpg"},
  {player: "Gary Payton II", 
  team: "Portland Trail Blazers",
  image: "./images/payton.jpg"},
  {player: "Kevin Huerter", 
  team: "Sacramento Kings",
  image: "./images/huerter.jpg"},
  {player: "Otto Porter Jr.", 
  team: "Toronto Raptors",
  image: "./images/porter.jpg"}
]    
    
let correctAnswers = 0
let currentQuestionIndex

const startButton = document.getElementById('start-btn')
const resetButton = document.getElementById('reset-btn')
const nextButton = document.getElementById('next-btn')
const guessButton = document.getElementById('guess-btn')
const questionContainerElement = document.getElementById('question-container')
const playerElement = document.getElementById('player')
const answerButtonsElement = document.getElementById('answer-buttons')
const imageElement = document.getElementById('image')
const finalScore = document.getElementById("final-score")
const intro = document.querySelector(".intro")

startButton.addEventListener('click', startGame)
guessButton.addEventListener('click', checkList)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    whichList()
})
resetButton.addEventListener("click", resetGame)

function resetGame() {
  correctAnswers = 0
  startButton.classList.remove('hide')
  resetButton.classList.add('hide')
  guessButton.classList.add('hide')
  currentQuestionIndex = 0
  questionContainerElement.classList.add('hide')
  intro.classList.remove("hide")
  document.getElementById("score").innerText = "Current Score: 0/0"
}

function checkList() {
  if (displayRadioValue() == "Easy") {
    checkGuess(easyList)
  }
  else if (displayRadioValue() == "Medium") {
    checkGuess(mediumList)
  }
  else if (displayRadioValue() == "Hard") {
    checkGuess(hardList)
  }
  else
    {
      checkGuess(easyList)
    }
}

function checkGuess(list) {
  if (document.getElementById("teams").value == list[currentQuestionIndex].team) {
    correctAnswers++
    document.getElementById("correct").innerText = "Correct!"
  }
  else {
    document.getElementById("correct").innerText = "Wrong!"
    document.getElementById("answer").innerText = `Correct Answer: ${list[currentQuestionIndex].team}`
  }
  document.getElementById("score").innerText = `Current Score: ${correctAnswers}/${currentQuestionIndex + 1}`
  if (currentQuestionIndex == list.length-1) {
    gameOver()
  }
  else {
  guessButton.classList.add("hide")
  nextButton.classList.remove("hide")
  }
}

function gameOver() {
  document.getElementById("score").innerHTML = `<p>My Final Score: ${correctAnswers}/${currentQuestionIndex + 1}</p><p> (Difficulty level: ${displayRadioValue()})</p>`
  nextButton.classList.add("hide")
  guessButton.classList.add("hide")
  resetButton.classList.remove("hide")
  correctAnswers=0
  currentQuestionIndex=0
}

function startGame() {
  correctAnswers = 0
  startButton.classList.add('hide')
  resetButton.classList.add('hide')
  guessButton.classList.remove('hide')
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  intro.classList.add("hide")
  whichList()
}

function whichList() {
  if (displayRadioValue() == "Easy") {
    setNextQuestion(easyList)
  }
  else if (displayRadioValue() == "Medium") {
    setNextQuestion(mediumList)
  }
  else if (displayRadioValue() == "Hard") {
    setNextQuestion(hardList)
  }
  else
    {
      setNextQuestion(easyList)
    }
}
    
function setNextQuestion(list) {
  document.getElementById("answer").innerText = ""
  document.getElementById("correct").innerText = ""
  guessButton.classList.remove("hide")
  nextButton.classList.add("hide")
  showQuestion(list[currentQuestionIndex])
}
    
function showQuestion(question) {
    playerElement.innerText = question.player
    imageElement.innerHTML = `<img src=${question.image} alt=${question.player}>`
}

function displayRadioValue() { 
  let ele = document.getElementsByName('difficulty-select'); 
  for (i = 0; i < ele.length; i++) { 
      if (ele[i].checked) 
      return ele[i].value; 
  } 
} 
