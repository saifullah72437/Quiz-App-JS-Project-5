let questionContainer = document.querySelector('#question');
let options = document.querySelectorAll('.option');
let row = document.querySelectorAll('.row');

const questions = [
    {
        'question':'Which of the following is markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JS',
        'd':'JAVA',
        'correct':'a'
    },
    {
        'question':'Which of the following is style language?',
        'a':'HTML',
        'b':'Cascading style sheet',
        'c':'JS',
        'd':'JAVA',
        'correct':'b'
    },
    {
        'question':'Which of the following is official language for android developement?',
        'a':'Kotlin',
        'b':'Python',
        'c':'JS',
        'd':'JAVA',
        'correct':'a'
    },
    {
        'question':'Which of the following is official language for Competitive programming?',
        'a':'Kotlin',
        'b':'C',
        'c':'JAVA',
        'd':'C++',
        'correct':'d'
    },
    {
        'question':'Which of the following is official language for Machine Learning?',
        'a':'JS',
        'b':'C',
        'c':'Python',
        'd':'C++',
        'correct':'c'
    },
]

let index = 0;
let loadQuestion = () => {
    let data = questions[index];
    // console.log(data);
    questionContainer.innerText = `${index+1}) ${data.question}`
    options[0].nextElementSibling.innerText = `${data.a}`
    options[1].nextElementSibling.innerText = `${data.b}`
    options[2].nextElementSibling.innerText = `${data.c}`
    options[3].nextElementSibling.innerText = `${data.d}`
}
let total = questions.length;
let right = 0, wrong = 0;

loadQuestion();

let submit = () =>{
    if(index < total)
    {
        getAns();
        console.log(right, wrong);
        unSelect();
        index++;
        loadQuestion();
    }
    else{
        document.querySelector('#box');
        box.innerHTML = `
        <h2>Total Score: ${total}</h2>
        <h2>Right Questions: ${right}</h2>
        <h2>Wrong Questions: ${wrong}</h2>
        `;
        // alert(`Total Score: ${total}\nRight Questions: ${right}\nWrong Questions: ${wrong}`)
        // index = 0;
        // loadQuestion();
    }
    // console.log(ans);

}

let getAns = () =>{
    options.forEach(element =>{
        if(element.checked){
            if(element.value === questions[index].correct){
                right++;
            }
            else{
                wrong++;
            }
        }
    })
}

let unSelect = () => {
    options.forEach(element =>{
        element.checked = element.unChecked;
    })
}