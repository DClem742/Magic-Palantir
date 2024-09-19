document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#palantir-form button');
    const image = document.querySelector('#palantir-form img');
    const audio = new Audio('a-palantir-is-a-dangerous-tool-saruman.mp3'); // Create an Audio object

    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission if it's a submit button
        
        // Play the sound
        audio.play();

        // Spin the image
        image.classList.add('spinning');
        
        // Stop spinning after 2 seconds (adjust as needed)
        setTimeout(function() {
            image.classList.remove('spinning');
        }, 2000);
    });
});
