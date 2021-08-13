const quizDB = [
    {
        question: "Q1: When did India win it's first ever world cup?",
        a: "2007",
        b: "2011",
        c: "1983",
        d: "2019",
        ans: "ans3",
    },
    {      
        question: "Q2: How many international centuried does Virat Kohli have ?",
        a: "70",
        b: "100",
        c: "65",
        d: "71",
        ans: "ans1",

    },
    {
        question: "Q3:Which player has the most number of double centuries in ODI format ?",
        a: "Virendra Sehwag",
        b: "Rohit Sharma",
        c: "Sachin Tendulkar",
        d: "Chris Gayle",
        ans: "ans2",


    },
    {
        question: "Q4: Who is termed as the GOD of cricket by the entire cricketing universe?",
        a: "Ricky Ponting",
        b: "Jacques Kallis",
        c: "Viv Richards",
        d: "Sachin Tendulkar",
        ans: "ans4",

},
{
    question: "Q5 : Who is the most successful Indian captain till date ?",
        a: "Saurav Ganguly",
        b: "Mahindra Singh Dhoni",
        c: "Mohammad Azharuddin",
        d: "Rahul Dravid",
        ans: "ans2",

}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

     const questionList = quizDB[questionCount];

    question.innerText= questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
            
    });
         return answer;
};

const deselectAll =  () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}


submit.addEventListener('click',() => {
const checkedAnswer = getCheckAnswer();
console.log(checkedAnswer);


if(checkedAnswer === quizDB[questionCount].ans){
    score++;
};

questionCount++;

deselectAll();

if(questionCount < quizDB.length){
    loadQuestion();
} else {

    showscore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} </h3>
    <button class = "btn" onclick = "location.reload()" > completed </button>

    `;

    showscore.classList.remove('scoreArea');

}

});
