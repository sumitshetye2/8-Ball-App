document.getElementById("answer").textContent =
  "Click the ball to get an answer";

function getAnswer() {
  const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  const ball = document.querySelector(".magic-8-ball");

  // Add a click event listener to the Magic 8-Ball
  ball.addEventListener('click', function() {
    // Play the sound effect
    var sound = document.getElementById('sound');
    sound.currentTime = 0; // Reset the audio playback time to the beginning
    sound.play();

    // Add the shaking class for animation
    ball.classList.add('shaking');

    // Remove the shaking class after a short delay
    setTimeout(function() {
      ball.classList.remove('shaking');
      const randomIndex = Math.floor(Math.random() * answers.length);
      const answer = answers[randomIndex];
      document.getElementById("answer").textContent = answer;
    }, 500); // Adjust the delay to match the duration of the animation
  });

}
