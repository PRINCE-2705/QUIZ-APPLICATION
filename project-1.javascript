
const quizData = [{
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Jupiter",
        b: "Mars",
        c: "Venus",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "What is the largest mammal in the world?",
        a: "African Elephant",
        b: "Blue Whale",
        c: "Polar Bear",
        d: "Giraffe",
        correct: "b",
    },
    
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quizContainer = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers(); 

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    let selectedAns = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            selectedAns = answerEl.id;
        }
    });

    return selectedAns;
}

function deselectAnswers() {
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const selectedAns = getSelected();

    if (selectedAns) {
        if (selectedAns === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
