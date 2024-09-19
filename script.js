document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    const image = document.querySelector('img');
    const audio = new Audio('a-palantir-is-a-dangerous-tool-saruman.mp3');
    const answerOutput = document.getElementById('answer-output');

    const answers = [
        "It is certain.",
        "Without a doubt.",
        "You may rely on it.",
        "The stars are not aligned.",
        "My sources say no.",
        "Outlook not so good.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "The Palantir is clouded.",
        "The future is uncertain."
    ];

    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Play the sound
        audio.play();

        // Add fiery effect to the image
        image.classList.add('fiery');

        answerOutput.style.opacity = "0";

        // Select a random answer
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

        // Clear previous answer and set new one
        answerOutput.textContent = '';
        setTimeout(() => {
            answerOutput.textContent = randomAnswer;
            answerOutput.style.opacity = "1";
            image.classList.remove('fiery');
        }, 2000);
    });
});