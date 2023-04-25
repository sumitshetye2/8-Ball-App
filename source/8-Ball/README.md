# :8ball: We Take Showers's Magic 8-Ball App :8ball:

## Project Description
This web app was made via HTML, CSS, and Javascript. Its functionality is that of a basic toy 8-ball you can find in at a store. Clicking the ball will generate a random response

## Link to App
[8-ball App]()

## Video Example
[click here (markdown doesn't support video natively, so a link to the video demo should be fine)]()

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


## Contributing
*Add names + link to + contribution here*  

Sumit Shetye - [About Me](https://sumitshetye2.github.io/first-lab/)  
- Gradient Background
- Documentation

Sholehani Hafezi - [About Me](https://sholehani.github.io/cse110-lab1/)
- Background Selector

## Changelog
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



