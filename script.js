const questionNumEl = document.querySelector(".question-num");
const subjectEl = document.querySelector(".subject");
const questionEl = document.querySelector(".question");
const choiceEls = document.querySelectorAll(".choice-item");
const statusEls = document.querySelectorAll(".status-item");
const nextBtn = document.querySelector(".next-btn");
const skipBtn = document.querySelector(".skip-btn");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questions = [
  {
    subject: "Math",
    question: "What is 2 + 2?",
    choices: ["1", "2", "3", "4"],
    correct: 3,
  },
  {
    subject: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
    correct: 1,
  },
  {
    subject: "History",
    question: "Who was the first President of the USA?",
    choices: ["Lincoln", "Washington", "Adams", "Jefferson"],
    correct: 1,
  },
  {
    subject: "Programming",
    question: "Which language runs in the browser?",
    choices: ["Python", "C++", "JavaScript", "Java"],
    correct: 2,
  },
];

function loadQuestion() {
  const q = questions[currentQuestion];
  subjectEl.textContent = q.subject;
  questionNumEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionEl.textContent = q.question;
  choiceEls.forEach((choiceEl, index) => {
    choiceEl.textContent = q.choices[index];
  });
  nextBtn.disabled = true;
  selectedAnswer = null;
}

choiceEls.forEach((choiceBtn, index) => {
  choiceBtn.addEventListener("click", () => {
    selectedAnswer = index;
    choiceEls.forEach((b) => b.classList.remove("selected"));

    choiceBtn.classList.add("selected");
    nextBtn.disabled = false;
  });
});

nextBtn.addEventListener("click", () => {
  checkAnswer();
  goToNextQuestion();
});

skipBtn.addEventListener("click", () => {
  checkAnswer();
  goToNextQuestion();
});

function checkAnswer() {
  const correctAnswerIndex = questions[currentQuestion].correct;
  if (selectedAnswer === correctAnswerIndex) {
    statusEls[currentQuestion].classList.add("correct");
    score++;
  } else {
    statusEls[currentQuestion].classList.add("wrong");
  }
}

function goToNextQuestion() {
  currentQuestion++;
  if (questions.length > currentQuestion) loadQuestion();
  else {
    showFinalScore();
  }
}

function showFinalScore() {
  questionEl.textContent = `You have scored ${score} out of ${questions.length}`;
  subjectEl.textContent = "";
  questionNumEl.textContent = "";
  choiceEls.forEach((btn) => (btn.style.display = "none"));
  nextBtn.style.display = "none";
  skipBtn.style.display = "none";
}

loadQuestion();
