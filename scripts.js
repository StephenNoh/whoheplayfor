//array of players

// const easyList = [
//   {player: "Nic Batum", 
//   team: "Los Angeles Clippers",
//   image: "./images/batum.jpg"},
//   {player: "Danny Green", 
//   team: "Philadelphia 76ers",
//   image: "./images/green.jpg"},
//   {player: "Julius Randle", 
//   team: "New York Knicks",
//   image: "./images/randle.jpg"},
//   {player: "Robert Covington", 
//   team: "Portland Trail Blazers",
//   image: "./images/covington.jpg"},
//   {player: "Jerami Grant", 
//   team: "Detroit Pistons",
//   image: "./images/grant.jpg"},
//   {player: "George Hill", 
//   team: "Oklahoma City Thunder",
//   image: "./images/hill.jpg"},
//   {
//     player: "Tristan Thompson",
//     team: "Boston Celtics",
//     image: "./images/thompson.jpg"
//   }
// ]

const mediumList = [
  {player: "Jahlil Okafor", 
  team: "Detroit Pistons",
  image: "./images/okafor.jpg"},
  {player: "Avery Bradley", 
  team: "Miami Heat",
  image: "./images/bradley.jpg"},
  {player: "Aron Baynes", 
  team: "Toronto Raptors",
  image: "./images/baynes.jpg"},
  {player: "Bryn Forbes", 
  team: "Milwaukee Bucks",
  image: "./images/forbes.jpg"},
  {player: "Nerlens Noel", 
  team: "New York Knicks",
  image: "./images/noel.jpg"},
  {player: "Brad Wanamaker", 
  team: "Golden State Warriors",
  image: "./images/wanamaker.jpg"},
  {
    player: "Delon Wright",
    team: "Detroit Pistons",
    image: "./images/wright.jpg"
  }
]

const hardList = [
  {player: "Max Strus", 
  team: "Miami Heat",
  image: "./images/strus.jpg"},
  {player: "Keita Bates-Diop", 
  team: "San Antonio Spurs",
  image: "./images/bates-diop.jpg"},
  {player: "De'Andre Bembry", 
  team: "Toronto Raptors",
  image: "./images/bembry.jpg"},
  {player: "Torrey Craig", 
  team: "Milwaukee Bucks",
  image: "./images/craig.jpg"},
  {player: "Darius Miller", 
  team: "Oklahoma City Thunder",
  image: "./images/miller.jpg"},
  {player: "Jalen Lecque", 
  team: "Indiana Pacers",
  image: "./images/lecque.jpg"},
  {player: "Tony Snell", 
  team: "Atlanta Hawks",
  image: "./images/snell.jpg"},
]    

const easyList = [
  {player: "Solomon Hill", 
  team: "Atlanta Hawks",
  image: "./images/solomonhill.jpg"},
  {player: "Alfonzo McKinnie", 
  team: "Los Angeles Lakers",
  image: "./images/mckinnie.jpg"},
  {player: "Ed Davis", 
  team: "Minnesota Timberwolves",
  image: "./images/davis.jpg"},
  {player: "James Johnson", 
  team: "Dallas Mavericks",
  image: "./images/johnson.jpg"},
  {player: "Garrett Temple", 
  team: "Chicago Bulls",
  image: "./images/temple.jpg"},
  {player: "Mark Daigneault (Coach)", 
  team: "Oklahoma City Thunder",
  image: "./images/daigneault.png"}
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
