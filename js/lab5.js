const questions = [

    {
        question: "Какое из этих чисел является простым?",
        image: "../img/lab5_pic1.jpg",
        answers: ["15", "17", "21"],
        correct: 1,
    },

    {
        question: "Что такое число π (пи)?",
        image: "../img/lab5_pic2.jpg",
        answers: ["Отношение длины окружности к её диаметру", "Отношение радиуса к длине окружности", "Иррациональное квадратное число"],
        correct: 0,
    },

    {
        question: "Кто из этих ученых считается отцом геометрии?",
        image: "../img/lab5_pic3.jpg",
        answers: ["Пифагор", "Евклид", "Архимед"],
        correct: 1,
    },

    {
        question: "Сколько измерений имеет гиперкуб?",
        image: "../img/lab5_pic4.jpg",
        answers: ["3", "4", "5"],
        correct: 1,
    },

    {
        question: "Как называется последовательность чисел, где каждое последующее число равно сумме двух предыдущих?",
        image: "../img/lab5_pic5.png",
        answers: ["Ряд Фибоначчи", "Ряд Эйлера", "Геометрическая прогрессия"],
        correct: 0,
    },

    {
        question: "Какое из этих чисел является иррациональным?",
        image: "../img/lab5_pic1.jpg",
        answers: ["√2", "3/4", "0.5"],
        correct: 0,
    },

    {
        question: "Какое число называют 'числом золотого сечения'?",
        image: "../img/lab5_pic7.png",
        answers: ["1.618", "3.141", "2.718"],
        correct: 0,
    },

    {
        question: "Какой символ используют для обозначения бесконечности?",
        image: "../img/lab5_pic8.jpg",
        answers: ["∞", "Σ", "Θ"],
        correct: 0,
    },

    {
        question: "Как называется плоская фигура, у которой нет углов и сторон?",
        image: "../img/lab5_pic9.jpg",
        answers: ["Круг", "Эллипс", "Треугольник"],
        correct: 0,
    },

    {
        question: "Какой математический знак используется для определения квадратного корня?",
        image: "../img/lab5_pic10.jpg",
        answers: ["√", "∑", "π"],
        correct: 0,
    },

];

let current_question = 0;
let score = 0;
let user_answers = [];

let question_element = document.querySelector("#question h3");
let image_element = document.querySelector("#question-image");
let answers_element = document.querySelector("#answers");
let result_element = document.querySelector("#result");
let score_element = document.querySelector("#score");
let user_answers_element = document.querySelector("#user-answers");

function load_question() {
    
    let question = questions[current_question];
    question_element.textContent = question.question;
    image_element.src = question.image;
    answers_element.innerHTML = "";

    question.answers.forEach((answer, index) => {
        
        let button = document.createElement("button");
        button.textContent = answer;
        button.dataset.index = index;

        button.addEventListener("click", () => check_answer(index));
        answers_element.appendChild(button);

    });

}

function check_answer(index) {

    user_answers.push(index);

    if (index === questions[current_question].correct) {

        score++;

    }

    current_question++;

    if (current_question < questions.length) {

        load_question();

    } else {

        show_result();

    }

}

function show_result() {

    document.querySelector("#quiz-container").style.display = "none";
    result_element.style.display = "block";

    score_element.textContent = `Вы правильно ответили на ${score} из ${questions.length}.`;

    user_answers_element.innerHTML = "";
    user_answers.forEach((answer, index) => {
        
        let question = questions[index];
        let p = document.createElement("p");
        p.textContent = `${index + 1}. ${question.question} - Ваш ответ: ${question.answers[answer]} (правильно: ${question.answers[question.correct]})`;
        user_answers_element.appendChild(p);

    });

}

load_question();