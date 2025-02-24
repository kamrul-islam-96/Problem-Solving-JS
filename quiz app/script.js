const questions = [
    {
        question :'What is the capital of BD',
        answers : [
            {text : 'Dhaka', correct: true},
            {text : 'Delhi', correct: false},
            {text : 'Thakurgaon', correct: false},
            {text : 'Khulna', correct: false},
        ]
    },
    {
        question :'What is the capital of India',
        answers : [
            {text : 'Dhaka', correct: false},
            {text : 'Delhi', correct: true},
            {text : 'Thakurgaon', correct: false},
            {text : 'Khulna', correct: false},
        ]
    },
    {
        question :'What is the capital of Australia',
        answers : [
            {text : 'Dhaka', correct: false},
            {text : 'Delhi', correct: false},
            {text : 'Sydney', correct: true},
            {text : 'Khulna', correct: false},
        ]
    },
    {
        question :'What is the largest country in the world',
        answers : [
            {text : 'Bangladesh', correct: false},
            {text : 'Russia', correct: true},
            {text : 'China', correct: false},
            {text : 'Australia', correct: false},
        ]
    },
];


const questionElement = document.getElementById ('question');
const answerButtons = document.getElementById ('answer-buttons');
const nextButton = document.getElementById ('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion ();
}



function showQuestion () {
    resetState ();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach (answer => {
        const button = document.createElement ('button');
        button.innerHTML = answer.text;
        button.classList.add ('btn');
        answerButtons.appendChild (button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }

        button.addEventListener ('click',selectAnswer);
    });
}



function resetState () {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild (
            answerButtons.firstChild
        );
    }
}



function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add ('correct');
        score++;
    }
    else {
        selectedBtn.classList.add ('incorrect');
    }

    answerButtons.querySelectorAll("button").forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add ("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}


function showScore () {
    resetState ();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}


function handleNextButton () {
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion ();
    }
    else {
        showScore ();
    }
}

nextButton.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); 
    }
});

startQuiz ();