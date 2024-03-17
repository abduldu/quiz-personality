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
        question: 'I have a natural talent for influencing people.',
        options: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'Modesty doesn’t become me.',
        options: ['True', 'False'],
        answer: 'False'
    },
    {
        question: 'I would do almost anything on a dare.',
        options: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'When people compliment me, I sometimes get embarrassed.',
        options: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'The thought of ruling the world frightens the hell out of me. If I ruled the world, it would be a better place.',
        options: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'I know that I am good because everybody keeps telling me so.',
        options: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'I tend to be a fairly cautious person.',
        options: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'I am essentially a modest person.',
        options: ['True', 'False'],
        answer: 'True'
    },
    {
        question: 'How do you typically handle disagreements in your relationships?',
        options: [
            'I listen and try to understand the other person’s perspective.',
            'I insist on my viewpoint and rarely consider alternative opinions.'
        ],
        answer: 'I listen and try to understand the other person’s perspective.'
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

