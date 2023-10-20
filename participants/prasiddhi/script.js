const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply bro, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

const answerDisplay = document.getElementById('answer');
const shakeButton = document.getElementById('shake-button');
const ball = document.getElementById('ball');

shakeButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    answerDisplay.textContent = randomAnswer;
    answerDisplay.style.opacity = 1;

    // Ball animation
    ball.animate(
        [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-150px)' }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out'
        }
    );
});
