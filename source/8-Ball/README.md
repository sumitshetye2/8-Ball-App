# :8ball: We Take Showers's Magic 8-Ball App :8ball:

## Project Description
This web app was made via HTML, CSS, and Javascript. Its functionality is that of a basic toy 8-ball you can find in at a store. Clicking the ball will generate a random response

## Link to App
[8-ball App](file:///C:/Users/maana/OneDrive/Documents/GitHub/cse110-sp23-group24/source/8-Ball/intro-screen.html)

## Link to Slides
[8-ball Slides](https://docs.google.com/presentation/d/1BX6Zg3tX9klgZdVdS8Vde1oiTOYtv6jMNfVOwSJcCyU/edit#slide=id.g2395cc508c3_1_227)

## Video Demo
[click here (markdown doesn't support video natively, so a link to the video demo should be fine)](https://youtu.be/nBaoaK6vsYw)


## Notable Code

### Basic Implementation (*Date Implemented Here*)
```
paste code here
```
Add explanation here

### 8-ball Sound Effect (*Date Implemented Here*)
```
paste code here
```
Add explanation here

### Text Box (*Date Implemented Here*)
```
paste code here
```
Add explanation here

### Text Box (*Date Implemented Here*)
```
paste code here
```
Add explanation here

### Gradient Background (*Implemented 4/23/2023*)
In magic-8-ball.css:
```
body {
    font-family: Arial, sans-serif;
    color: #fff;
    background: linear-gradient(45deg, red, blue, green);
    background-size: 750% 500%;
    animation: animate 15s ease infinite;
}

@keyframes animate {
    0%{
        background-position: 0 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0 50%;
    }
}
```
A background for for magic-8-ball.html is generated from a linear gradient at a 45 degree angle containing the colors red, blue, and green. This background is then resized and in practice only a portion of the background is showing. The animation is from this enlarged background by being shifted side to side creating the illusion that the colors are changing.

### Background Selector (*Implemented 4/24/2023*)
In magic-8-ball.html:
```
<select id="background-selector">
    <option value="">✧✧ Select a Background ✧✧</option>
    <option value="gradient">Gradient Background</option>
    <option value="magicball">Magic Ball Background</option>
    <option value="stars">Stars Background</option>
</select>
```
A select element is generated after the introduction screen, prompting three different background options. The 8-ball app's background defaults to the gradient background when first opened.

In magic-8-ball.css:
```
body.magicball {
    background: url('magicball.png') no-repeat center center fixed;
    background-size: cover;
  }
  
  body.stars {
    background: url('night-stars.gif') no-repeat center center fixed;
    background-size: cover;
  }
  
  #background-selector {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  
  #background-selector option {
    color: #000;
    background: #fff;
  }
```
Two new backgrounds are defined to cover the screen for when they are chosen through the selector. The selector's button is also specified and placed at the top right of the screen.

In magic-8-ball.html:
```
var backgroundSelector = document.getElementById("background-selector");

backgroundSelector.addEventListener("change", function() {
  var selectedValue = this.value;
  if (selectedValue === "gradient") {
    document.body.classList.remove("stars", "magicball");
  } else if (selectedValue === "magicball") {
    document.body.classList.remove("stars");
    document.body.classList.add("magicball");
  } else if (selectedValue === "stars") {
    document.body.classList.remove("magicball");
    document.body.classList.add("stars");
  }
});
```
In the event a new background is selected, the background selector variable removes the previous background and adds the selected one. The default background is never removed.

### Text Box Empty Feature (*Implemented 4/25/2023*)
Prompt: Given the following html and js files edit it so that when the 8 ball is clicked the prompt resets to empty for the user to ask another question

Function change output in magic-8-ball.js:
```
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
  ball.addEventListener("click", function () {
    if (isShaking) {
      return;
    }

    // Play the sound effect
    const sound = document.getElementById("sound");
    sound.currentTime = 0; // Reset the audio playback time to the beginning
    sound.play();

    // Add the shaking class for animation
    isShaking = true;
    ball.classList.add("shaking");

    // Remove the shaking class after a short delay
    setTimeout(function () {
      ball.classList.remove("shaking");
      isShaking = false;
      const randomIndex = Math.floor(Math.random() * answers.length);
      const answer = answers[randomIndex];
      document.getElementById("answer").textContent = answer;
      document.getElementById("searchbox").value = ""; // Reset the prompt to empty
    }, 500); // Adjust the delay to match the duration of the animation
  });

  const questionInput = document.getElementById("searchbox"); // Change the id to match the HTML
  const magicBall = document.querySelector(".magic-8-ball");

  // add a listener to the question input field to enable/disable the magic ball
  questionInput.addEventListener("input", () => {
    if (questionInput.value.trim() === "") {
      magicBall.classList.add("disabled");
    } else {
      magicBall.classList.remove("disabled");
    }
  });

  // disable the magic ball initially
  magicBall.classList.add("disabled");

  // add a listener to the magic ball to prevent clicking if disabled or shaking
  magicBall.addEventListener("click", () => {
    if (magicBall.classList.contains("disabled") || isShaking) {
      return;
    }
    getAnswer();
  });

  document.getElementById("answer").innerHTML = randomAnswer;
  document.getElementById("sound").play();
}
```



## Contributing
*Add names + link to + contribution here*  

Sumit Shetye - [About Me](https://sumitshetye2.github.io/first-lab/)  
- Gradient Background
- Documentation

Sholehani Hafezi - [About Me](https://sholehani.github.io/cse110-lab1/)
- Background Selector
  
Kartik Gugnani - [About Me](https://kgugnani.github.io/CSE110_Lab1/)
- Text Box Empty Feature

## Changelog
v0.7:
- Made it so that text box is empty after every click on 8 ball

v0.6:
- Added a background selector

v0.5:
- Added an animated gradient background

v0.4:
- Added a text box for user input

v0.3:
- Added a front page

v0.2:
- Added a sound when button clicked

v0.1:
- added shaking effect when button clicked


v0.0:  
- Basic 8-ball built from generative A.I
- Switched AI generated button to clickable 8-ball button

## Citations
*Add screenshots of ChatGPT logs if you used them to generate code for the project here*

ChatGPT

