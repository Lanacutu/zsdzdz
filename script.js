document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "You're my sunshine!",
        "I love you more each day!",
        "Forever and always, my love!",
        "You make my heart skip a beat!",
        "Together forever, my sweetheart!",
    ];

    const balloonContainer = document.getElementById('balloon-container');
    const messageContainer = document.getElementById('message-container');

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.bottom = `-${Math.random() * 100}px`;
        balloon.style.animation = `float ${Math.random() * 5 + 5}s linear infinite`;

        balloon.addEventListener('click', () => {
            // Get a random message from the messages array
            const message = messages[Math.floor(Math.random() * messages.length)];
            showMessage(message);
            balloon.remove(); // Remove the balloon after it's clicked
        });

        balloonContainer.appendChild(balloon);
    }

    function showMessage(message) {
        messageContainer.textContent = message;
        messageContainer.classList.add('show');
        setTimeout(() => {
            messageContainer.classList.remove('show');
        }, 2000); // Show the message for 2 seconds
    }

    // Create balloons at regular intervals
    setInterval(createBalloon, 1500);
});