const quizQuestions = [
  {
    question: "What year did world war 2 end?",
    options: ["1941", "1943", "1945", "1944"],
    correctAnswer: "1945"
  },
  {
    question: "Who wrote to kill a mockingbird?",
    options: ["nithish", "george washington", "bashu", "madhan"],
    correctAnswer: "george washington"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    correctAnswer: "Au"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function startQuiz() {
  document.getElementById("next-button").classList.add("hidden");
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  document.getElementById("question-text").textContent = currentQuestion.question;
  const answerButtons = document.getElementById("answer-buttons");
  answerButtons.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add("answer-button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    answerButtons.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }
  document.getElementById("next-button").classList.remove("hidden");
  document.getElementById("next-button").addEventListener("click", nextQuestion);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
    document.getElementById("next-button").classList.add("hidden");
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score} out of ${quizQuestions.length}</p>`;
}

document.addEventListener("DOMContentLoaded", startQuiz);

