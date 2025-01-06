const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "a"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "c"
    },
    {
        question: "Which animal is known as the king of the jungle?",
        options: ["Lion", "Elephant", "Tiger", "Giraffe"],
        correctAnswer: "a"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    const options = document.querySelectorAll(".option");

    options.forEach((btn, index) => {
        btn.innerText = `${String.fromCharCode(65 + index)}. ${questionData.options[index]}`;
    });

    document.getElementById("result").innerText = "";
    document.getElementById("next").style.display = "none";
}

function checkAnswer(selected) {
    const questionData = questions[currentQuestionIndex];
    const resultDiv = document.getElementById("result");

    if (selected === questionData.correctAnswer) {
        resultDiv.innerText = "Correct!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerText = "Wrong answer.";
        resultDiv.style.color = "red";
    }

    document.getElementById("next").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("result").innerText = "Quiz Completed!";
        document.getElementById("next").style.display = "none";
    }
}

// Initialize the quiz
loadQuestion();
