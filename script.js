const questionNumEl = document.querySelector(".question-num");
const subjectEl = document.querySelector(".subject");
const questionEl = document.querySelector(".question");
const choiceEls = document.querySelectorAll(".choice-item");
const nextBtn = document.querySelector(".next-btn");
const skipBtn = document.querySelector(".skip-btn");

let currentQuestion = 0;
let score = 0;

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
}

loadQuestion();
