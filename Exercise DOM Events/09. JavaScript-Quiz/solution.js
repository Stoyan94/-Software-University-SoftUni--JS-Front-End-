function solve() {
    const quizAnswerElements = document.querySelectorAll('.quiz-asnwer');

    const questions = {
        'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
        'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
        'Question #3: What is DOM?': 'A programming API for HTML and XML documents',
    }

    let asnwerQuestions = 0;

    for (const asnwerElement of quizAnswerElements) {
           asnwerElement.addEventListener('click', (e) => {
           const questionTitle = e.currentTarget.parentElement.querySelector('.question h2').textContent;
           const asnwerText = asnwerElement.querySelector('.asnwer-text').textContent;

           if (questions[questionTitle] == asnwerText) {
              asnwerQuestions++;
           }
        });
    };
}
