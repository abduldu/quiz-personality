document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const exitBtn = document.getElementById('exitBtn');
    const continueBtn = document.getElementById('continueBtn');
    const startQuizBtn = document.getElementById('startQuizBtn');

    // Display the popup
    overlay.style.display = 'block';

    exitBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    continueBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    // Redirect to quiz page when Start Quiz button is clicked
    startQuizBtn.addEventListener('click', function () {
        window.location.href = 'quiz.html';
    });
});
// quizQuestions
// Define quiz questions and answers
// Define quiz questions and answers
const quizQuestions = [
    {
        question: 'Most would describe me as charming and nonchalant — I can turn my charm on and off like a faucet.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'I do what I want, when I want, the moment the impulse strikes me, regardless of what others want.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'If something goes wrong or turns out badly, it’s not my fault.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'I’ve gotten into legal or criminal trouble as an adult (not just a speeding or parking ticket).',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'I am easily the best at what I do, bar none — nobody could ever take my place.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'I do whatever I feel like doing, and I don’t care what others think — or even if it’s illegal.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'Every person for themselves; I don’t see the point in feeling sorry for other people and have no desire to help others.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'I’ve gotten into legal or criminal trouble when I was a teenager (not just a speeding or parking ticket).',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: 'I have no problem or concern in lying in order to get what I want.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    },
    {
        question: '“Live in the moment” is what I say; the future will take care of itself and learning from your past is pointless.',
        options: ['Not me', 'This describes me somewhat', 'This is definitely me']
    }
];


document.addEventListener('DOMContentLoaded', function () {
    const question = document.getElementById('question');
    const optionsContainer = document.getElementById('optionsContainer');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    
    // Function to load the question
    function loadQuestion() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        question.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
        
        // Clear previous options
        optionsContainer.innerHTML = '';
        
        // Create and append options
        currentQuestion.options.forEach((option, index) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'option';
            optionInput.id = `option${index + 1}`;
            optionInput.value = option;
            
            const optionLabel = document.createElement('label');
            optionLabel.htmlFor = `option${index + 1}`;
            optionLabel.textContent = option;
            
            optionsContainer.appendChild(optionInput);
            optionsContainer.appendChild(optionLabel);
            optionsContainer.appendChild(document.createElement('br'));
        });
    }
    
    // Load the first question
    loadQuestion();
    
    // Event listener for the Next button
    nextBtn.addEventListener('click', function () {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (!selectedOption) {
            return;
        }
        
        const userAnswer = selectedOption.value;
        const correctAnswer = quizQuestions[currentQuestionIndex].answer;
        
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
        
        // Move to the next question
        currentQuestionIndex++;
        
        // Check if quiz is completed
        if (currentQuestionIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            // Quiz Completed, redirect to results page
            localStorage.setItem('correctAnswers', correctAnswers);
            localStorage.setItem('incorrectAnswers', incorrectAnswers);
            window.location.href = 'results.html';
        }
    });
});

