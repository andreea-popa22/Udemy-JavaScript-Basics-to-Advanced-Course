$(document).ready(function() {

    var quizList = $('#quiz-list');
    var submitBtn = $('#submit-section');
    var scoreCount = $('#score-count');
    var answer = [];
    var score = 0;

    submitBtn.remove();
    
    function createQuestion(id, question, answer, option){
        // Crete Question Section
        var newQuestionSection = document.createElement('section');
        newQuestionSection.className = 'quiz-item'
        newQuestionSection.id = id;
        newQuestionSection.answer = answer;

        // Create Question Text
        var newQuestionText = document.createElement('h3');
        var string = "Q" + id + ". " + question;
        var textNode = document.createTextNode(string);
        newQuestionText.appendChild(textNode);

        newQuestionSection.appendChild(newQuestionText)

        // Create Question's option
        for (var i = 0; i<4; i++){
            var newOptionWrapper = document.createElement('div');
            newOptionWrapper.className = 'option-wrapper';

            var newLabelOption = document.createElement('label');
            var newInputOption = document.createElement('input');
            newInputOption.setAttribute('type', 'radio');
            newInputOption.setAttribute('name', 'q' + id);
            newInputOption.setAttribute('value', i);
            newInputOption.required = true;
            var newOptionText = document.createElement('p');
            var optionTextNode = document.createTextNode(option[i]);
            newOptionText.appendChild(optionTextNode);

            newLabelOption.appendChild(newInputOption);
            newLabelOption.appendChild(newOptionText);

            newOptionWrapper.appendChild(newLabelOption);
            newQuestionSection.appendChild(newOptionWrapper);
        }

        return newQuestionSection;
    }

    function getQuestion(){
        $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function(data,status){
            var response = data;

            for (var i = 0; i < response.length; i++) {
                quizList.append(createQuestion(response[i].id, response[i].question, response[i].answer, response[i].options))
                answer.push(response[i].answer);
                console.log(response[i])
            }
            console.log(answer);
            quizList.append(submitBtn);
        })
    }

    getQuestion();

    console.log('Script Loaded');

    function checkAnswer(Form){
        var i = 0;
        Object.keys(Form).forEach(question => {
            if(Form[question] == answer[i]){
                score += 1;
            }
            i++
        });
        console.log(score);
        scoreCount.html(score);
        score = 0;
    }

    quizList.on({
        'submit': function (e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            checkAnswer(formProps);
        },
    });
});