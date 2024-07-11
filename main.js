

// //Quiz 
const quizQuestions = [
    {
        question: "What does JS stand for?",
        options: ["Just Saying", "Jump Start", "JavaScript", "Jungle Safari"],
        answer: "JavaScript"
    },
    {
        question: "What is the main purpose of JavaScript?",
        options: ["Styling web pages", "Creating animations", "Adding interactivity", "Sending emails"],
        answer: "Adding interactivity"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "--"],
        answer: "//"
    }
];

let score = 0;

// Function to start the quiz
function startQuiz() {
    for (let i = 0; i < quizQuestions.length; i++) {
        const question = quizQuestions[i];
        const userAnswer = prompt(`${i + 1}. ${question.question}\nOptions:\n${question.options.join("\n")}`);
        // Check if user's answer is correct
        if (userAnswer && userAnswer.toLowerCase() === question.answer.toLowerCase()) {
            alert("Correct!");
            score++;
        } 
        else {
            alert(`Wrong! The correct answer is '${question.answer}'.`);
        }
    }

    alert(`Quiz Over! You scored ${score} out of ${quizQuestions.length}.`);
}
startQuiz();

