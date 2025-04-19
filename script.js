const questions = [
    {question: "Что такое HTML?",
        answers: ["Язык разметки", "Язык программирования", "База данных"],
        correctAnswer: 0
    },

    {question: "Что такое CSS?",
        answers: ["Стили", "Скрипты", "Функции"],
        correctAnswer: 0 
    },

    {question: "Какой тег используется для создания ссылок?",
        answers: ["<B>", "<h1>", "<a>"],
        correctAnswer: 2
    },

    {question: "В чём разница между CSS и HTML?",
        answers: ["HTML определяет, какой контент доступен на сайте, а CSS — как этот контент выглядит.", "ни в чем", "в написании"],
        correctAnswer: 0
    },

    {question: "Сколько существует разных версий CSS?",
        answers: ["1", "42", "5"],
        correctAnswer: 2
    },

    {question: "Чем отличается == от === в JavaScript?",
        answers: ["оператором сравнения", "еще одним знаком =", "улучшением текста"],
        correctAnswer: 0
    },

    {question: "Из чего состоит форматированный текст HTML? ",
        answers: ["из формированного текста", "HTML — это контент и теги. Теги позволяют задать способ отображения контента на веб-страницах. ", "улучшением текста"],
        correctAnswer: 1
    },

    {question: "Что такое HTML-тег? ",
        answers: ["это граффити на стенах", "(World Wide Web, WWW).", "Тег — это специальное служебное слово, заключённое в угловые скобки"],
        correctAnswer: 2
    },

    {question: "Что такое CSS-фреймворк? ",
        answers: ["библиотека готовых CSS-файлов", "фейверк", "упорная работа"],
        correctAnswer: 0
    },


    {question: "Как интегрировать CSS в веб-сайт?",
        answers: [" есть три варианта: встроенный, внутренний и импортированный", "импортирова CSS", "улучшить текст"],
        correctAnswer: 0
    }

];

let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

function loadQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    answersElement.innerHTML = "";

    for (let i = 0; i < question.answers.length; i++) {

        const answer = document.createElement("button");

        answer.textContent = question.answers[i];




      answer.addEventListener("click", () => checkAnswer(i));

       answersElement.appendChild(answer);
    }

}

function checkAnswer(answerIndex) {

    const question = questions[currentQuestion];

    if (answerIndex === question.correctAnswer) {
        score++
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        
        loadQuestion();

    } else {
        showResult();
    }

}

function showResult() {
    questionElement.textContent = "";

    answersElement.innerHTML = "";

    submitButton.style.display = "none";

    resultElement.textContent = `Результат: ${score} из ${questions.length}`;
}

submitButton.addEventListener("click", () => checkAnswer());



loadQuestion();