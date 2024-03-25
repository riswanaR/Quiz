
const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Rome', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        answer: 'Mars'
    },
    {
        question:'What is the color of blood when it is inside your body?',
        options:['yellow', 'white', 'green', 'Red'],
        answer:'Red'
    },
    {
        question:'Which is the fastest bird in the world?',
        options:['Bald eagle','Raven','Peregrine Falcon','HummingBird'],
        answer:'Peregrine Falcon'
    },
    {
        question:'What is the tallest waterfall in the world?',
        options:['Sutherland Falls, New Zealand','Angel Falls, Venezuela','Niagara Falls, New York','Wailua Falls, Hawaii'],
        answer:'Angel Falls, Venezuela'
    },
    {
        question:'What letter is not present anywhere on the periodic table of elements?',
        options:['X','J','F','C'],
        answer:'J'
    },
    {
        question:'Which of these animals has the ability to laugh?',
        options:['Crocodile','Whale','Bear','Rat'],
        answer:'Rat'
    },
    {
        question:'Which of these foods will never spoil?',
        options:['Honey','Beef Jerky','Cereal','Beans'],
        answer:'Honey'
    },
    {
        question:'What is something the ancient Romans used as mouthwash?',
        options:['Saltwater','Urine','Mint tea','Freshwater'],
        answer:'Urine'
    },
    {
        question:'About how many scents can a human nose remember?',
        options:['Around 10,000','Around 500','Around 50,000','Around 1 million'],
        answer:'Around 50,000'
    },
    {
        question:'What is the capital city of Canada?',
        options:['Toronto','Vancouver ','Ottawa','Montreal'],
        answer:'Ottawa'
    },
    {
        question:'People with what color hair are genetically mutants?',
        options:['Black','Red','Blonde','Brown'],
        answer:'Red'
    },
    {
        question:'Which color is not there in the rainbow?',
        options:['Indigo','Red','Brown','Yellow'],
        answer:'Brown'
    },
    {
        question:'How many stripes are there on the US flag?',
        options:['10','11','12','13'],
        answer:'13'
    },
    {
        question:'How many rings appear on the Olympic flag?',
        options:['1','3','5','7'],
        answer:'5'
    },
    {
        question:'What is the atomic sign for Helium on the periodic table?',
        options:['H','He','HI','Hu'],
        answer:'He'
    },
    {
        question:'What is the general name for a group of wolves?',
        options:['Pack','School','Flock','Tuple'],
        answer:'Pack'
    },
    {
        question:'What is the currency of Scotland?',
        options:['Euro','Yen','Pound sterling','Haggis'],
        answer:'Pound sterling'
    },
    {
        question:'In which country is the Taj Mahal situated?',
        options:['Pakistan','India','Japan','France'],
        answer:'India'
    },
    {
        question:'Which is the longest river in the world?',
        options:['Mississippi','Nile','Amazon','Yangtze'],
        answer:'Nile'
    }
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');

    optionButtons.forEach(button => {
        button.disabled = true; 
        if (button.innerText === currentQuestion.answer) {
            button.style.borderColor = 'green'; 
        } else if (button.innerText === selectedOption) {
            button.style.borderColor = 'red'; 
        }
    });

    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        setTimeout(loadQuestion, 1000); 
    } else {
        setTimeout(showResult, 1000); 
    }
}


function showResult() {
    quizContainer.style.display = 'none';
    resultElement.innerText = `Your score: ${score}/${quizData.length}`;
    resultElement.style.display = 'block';
}

submitButton.addEventListener('click', loadQuestion);

loadQuestion();
