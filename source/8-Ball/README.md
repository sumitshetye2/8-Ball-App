# :8ball: We Take Showers's Magic 8-Ball App :8ball:

## Project Description
This web app was made via HTML, CSS, and Javascript. Its functionality is that of a basic toy 8-ball you can find in at a store. Clicking the ball will generate a random response.

## Link to App
[Magic 8-Ball App](https://cse110-sp23-group24.pages.dev/magic-8-ball-intro-screen)

## Link to Slides
[8-ball Slides](https://docs.google.com/presentation/d/1BX6Zg3tX9klgZdVdS8Vde1oiTOYtv6jMNfVOwSJcCyU/edit#slide=id.g2395cc508c3_1_227)

## Video Demo
[Click here](https://youtu.be/nBaoaK6vsYw)


## Notable Code

### Basic Implementation (*Implemented 4/21/2023*)
In magic-8-ball.html:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Magic 8-Ball</title>
    <link rel="stylesheet" href="magic-8-ball.css" />
  </head>
  <body>
    <div class="container">
      <h1>Magic 8-Ball</h1>
      <div class="magic-8-ball disabled" onclick="getAnswer()">
        <p id="answer">Click the ball to get an answer</p>
      </div>
    </div>
    <script src="magic-8-ball.js"></script>
  </body>
</html>
```


In magic-8-ball.css:
```
body {
    font-family: Arial, sans-serif;
    color: #fff;
    background: linear-gradient(45deg, red, blue, green);
    background-size: 750% 500%;
    animation: animate 15s ease infinite;
}

h1 {
    user-select: none
}

.container {
    max-width: 600px;
    margin-inline: auto;
    text-align: center;
    padding: 30px;
    position: relative;
}


#answer {
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    color: black;
    padding-inline: 30px;
    padding-block: 30px;
    border-radius: 10px;
    user-select: none
}

```

In magic-8-ball.js
```
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


  document.getElementById("answer").innerHTML = randomAnswer;
  
}
```
This was the basic code generated via ChatGPT, in which we asked it to generate a ball with which to place a box containing the answer. When the ball is clicked only the answer was changed.

### 8-ball Shaking Effect (*Implemented 4/21/23*)
In magic-8-ball.css:
```
@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        transform: translateX(-5px);
    }

    20%,
    40%,
    60%,
    80% {
        transform: translateX(5px);
    }
}

.shaking {
    animation: shake 0.5s;
}
```

In magic-8-ball.js:
```
ball.addEventListener("click", function () {
    if (isShaking) {
      return;
    }

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
```
The above changes in the code allows for the 8 ball to shake left to right for a short time simulating how you would shake a real toy magic 8-ball.

### 8-ball Sound Effect (*Implemented 4/22/23*)
In magic-8-ball.js:
```
// Play the sound effect
const sound = document.getElementById("sound");
sound.currentTime = 0; // Reset the audio playback time to the beginning
sound.play();
```
In magic-8-ball.html:
```
<div class="container">
    <h1>Magic 8-Ball</h1>
    <div class="magic-8-ball disabled" onclick="getAnswer()">
        <p id="answer">Click the ball to get an answer</p>
    </div>
</div>
<audio id="sound" src="8ballnoise.mp3" preload="auto"></audio>
```
In magic-8-ball.js:
```
document.getElementById("sound").play();
```
The above code causes a sound to be played when the 8-ball is clicked.
### Text Box (*Implemented 4/22/2023*)
In magic-8-ball.html:
```
<div class="container2"">
    <form onsubmit="event.preventDefault();">
        <label for="question">Ask a Question:</label>
        <input type="text" id="searchbox" name="searchbox" required>
    </form>
</div>
```

In magic-8-ball.css:
```
.container2 {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 30px;
    position: relative;
}

form {
    display: inline-block;
    text-align: left;
}

label {
    font-weight: bold;
}

.answer-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate
}

input[type="text"] {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 16px;
    background-color: #f8f8f8;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
 }
  
 input[type="text"]:focus {
    outline: none;
    border-bottom: 2px solid #555;
 }

 label[for="question"] {
    font-size: 24px;
    line-height: 1.5;
 }
 ```

 In magic-8-ball.js
 ```
   // add a listener to the question input field to enable/disable the magic ball
  questionInput.addEventListener("input", () => {
    if (questionInput.value.trim() === "") {
      magicBall.classList.add("disabled");
    } else {
      magicBall.classList.remove("disabled");
    }
  });
  ```
Adds a UI for the user to input a question as well as a button to submit the response, triggering the 8-ball to activate. When this feature was first implemented, the input box did not clear itself to ready itself for the next question. This was later patched (See 'Text Box Enpty Feature').



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

Nathan Huey - [About Me](https://nahuey.github.io/cse110sp2023-lab1/)
- Intro Screen

Linda Wu - [About Me](https://liindawu.github.io/Lab1/)
- Sound Effect

Benjamin Liang - [About Me](https://beliang.github.io/cse110-lab1/)
- Text Box

Haoyang Guo - [About Me](https://haoyangguo.github.io/cse110-lab1/)
- Basic Implementation
- Shaking Effect
- Default message and Bug fixes

## Changelog
v0.8:
- Prevent user from pressing the ball without asking a question
- Style updates

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

