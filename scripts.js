//array of players

const mediumList = [
    {player: "Jahlil Okafor", 
    team: "Detroit Pistons",
    image: "https://www.basketball-reference.com/req/202101181/images/players/okafoja01.jpg"},
    {player: "Avery Bradley", 
    team: "Miami Heat",
    image: "https://www.basketball-reference.com/req/202101181/images/players/bradlav01.jpg"},
    {player: "Aron Baynes", 
    team: "Toronto Raptors",
    image: "https://www.basketball-reference.com/req/202101181/images/players/baynear01.jpg"},
    {player: "Bryn Forbes", 
    team: "Milwaukee Bucks",
    image: "https://www.basketball-reference.com/req/202101181/images/players/forbebr01.jpg"},
    {player: "Nerlens Noel", 
    team: "New York Knicks",
    image: "https://www.basketball-reference.com/req/202101181/images/players/noelne01.jpg"},
    {player: "Brad Wanamaker", 
    team: "Golden State Warriors",
    image: "https://www.basketball-reference.com/req/202101181/images/players/wanambr01.jpg"},
    ]

    
    
    let correctAnswers = 0
    
    const startButton = document.getElementById('start-btn')
    const otherButton = document.getElementById('other-btn')
    const nextButton = document.getElementById('next-btn')
    const guessButton = document.getElementById('guess-btn')
    const questionContainerElement = document.getElementById('question-container')
    const playerElement = document.getElementById('player')
    const answerButtonsElement = document.getElementById('answer-buttons')
    const imageElement = document.getElementById('image')
    const finalScore = document.getElementById("final-score")
    const intro = document.querySelector(".intro")
    
    let currentQuestionIndex
    
    startButton.addEventListener('click', startGame)
    guessButton.addEventListener('click', checkGuess)
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++
        setNextQuestion()
    })

    function checkGuess() {
      if (document.getElementById("teams").value == mediumList[currentQuestionIndex].team) {
        correctAnswers++
        document.getElementById("correct").innerText = "Correct!"
      }
      else {
        document.getElementById("correct").innerText = "Wrong!"
        document.getElementById("answer").innerText = `Correct Answer: ${mediumList[currentQuestionIndex].team}`
      }
      document.getElementById("score").innerText = `Current Score: ${correctAnswers}/${currentQuestionIndex + 1}`
      if (currentQuestionIndex == mediumList.length-1) {
        gameOver()
      }
      else {
      guessButton.classList.add("hide")
      nextButton.classList.remove("hide")
    }
    }
    function gameOver() {
      alert(`game over. you got ${correctAnswers} out of ${mediumList.length}`)
    }
    function startGame() {
        correctAnswers = 0
        startButton.classList.add('hide')
        otherButton.classList.add('hide')
        guessButton.classList.remove('hide')
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        intro.classList.add("hide")
        setNextQuestion()
    }
    
    function setNextQuestion() {
      document.getElementById("answer").innerText = ""
      document.getElementById("correct").innerText = ""
      guessButton.classList.remove("hide")
      nextButton.classList.add("hide")
      showQuestion(mediumList[currentQuestionIndex])
    }
    
    function showQuestion(question) {
        playerElement.innerText = question.player
        imageElement.innerHTML = `<img src=${question.image} alt=${question.player}>`
    }