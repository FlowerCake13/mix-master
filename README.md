# mix-master

You've gathered your sounds, you've got the groove - you're ready to become the best web DJ there is! Create a DJ mixer table so you can loop your favorite home made sounds.

## Objective
Use **DOM Event Listeners**, **Functions**, and **HTML Audio** to create a web sound mixer.

## Prerequisites
To complete this project, students should have the following:
* Basic understanding of HTML structure and attributes.
* Basic understanding of Flex box
* Basic understanding of JavaScript and DOM
* Introduction to For Loops, Functions, and Variable Scope (optional)

## Your Challenge

### Part I: Create your HTML Page
To complete this exercise, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML, CSS, JS file
(Make sure you have the images and sounds folder as well)
3. Link all of your files correctly.
4. Create the following in your HTML. The following elements are indented showing their nesting relationships. When you have finished coding your HTML, you should have 1 container div with 1 sound-container div. The sound-container div contains 8 sound divs. Each sound div has their own audio and/or image.

* ```div``` with an ```id``` of 'container'.
 * ```div``` with an ```id``` of 'sound-container'.
  * ```div``` with an ```id``` of 'sound1' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound1' and correct ```src```.
  * ```div``` with an ```id``` of 'sound2' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound2' and correct ```src```.
  * ```div``` with an ```id``` of 'sound3' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound3' and correct ```src```.
  * ```div``` with an ```id``` of 'sound4' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound4' and correct ```src```.
  * ```div``` with an ```id``` of 'sound5' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound5' and correct ```src```.
  * ```div``` with an ```id``` of 'sound6' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound6' and correct ```src```.
  * ```div``` with an ```id``` of 'sound7' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound7' and correct ```src```.
  * ```div``` with an ```id``` of 'sound8' and ```class``` of 'sound'.
    * ```audio``` with an ```id``` of 'audiosound8' and correct ```src```

In one of these divs with class of sound, add the image of the disc within the div (it will be a sibling to the audio). Set the width and height of the image to be 400px by 400px.

### Part II: Adding Styles
To complete the second part of this exercise, fulfill the following requirements:

In your CSS file, do the following:
* Target the container id.
  * Set the:
    * ```width``` to '100%'
    * ```height``` to '800px'
  * Activate flex box *Hint: Use the display property!*
  * Center the container horizontally and vertically using flex box.
* Target the sound-container id.
  * Set the:
    * ```width``` to '200px'
    * ```height``` to '200px'
    * ```margin``` to '2px'
    * ```border-radius``` to '200px'
  * On hover:
    * Set the ```box-shadow``` property to '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);'
* Change the background colors of each sound.

### Part III: Adding JS
To complete the third part of this exercise, fulfill the following requirements:

In your JS file, do the following:
1. Store all of your sound divs (id of sound1, sound2, sound3...etc.) in variables. *Hint: Use var sound1 = document.getElementById...etc.*
2. Create a variable called loop. Set it to a value of ```true```.
3. Create functions to play your sounds! Create a function for each sound that you want to play when the div is clicked.

For example, in a function called playSound1(), I will create a variable called sound and set that equal to document.getElementById('audiosound1').
I will then play the sound and loop it.

```JavaScript
function playSound1() {
  var sound = document.getElementById('audiosound1');
  sound.play();
  sound.loop = loop;
}
```

Create functions ```playSound2()```, ```playSound3()```, ```playSound4()```, ```playSound5```, ```playSound6```, ```playSound7```, and ```playSound8``` like the example above. *Can you create the variable named sound in every function or does it have to have a different variable name? Why or why not?*

4. To each ```sound1```, ```sound2```, ```sound3```...etc. variables that you created to store the actual sound div, add an Event Listener to detect a ```click``` event. When the div is clicked, execute the function you created for that specific sound.

Example:
```JavaScript
sound1.addEventListener('click', playSound1);
```

5. For the div with the disc image, add an Event Listener to the ```window``` instead of ```sound5```. Instead of listening for a click, listen for a ```keydown``` event!

6. Test your mixer!

## Stretch Goals
1. Make this the coolest DJ mixing table ever! Add neon shadows and other cool light/CSS effects.
2. How can we stop looping the sounds when we click the divs a second time? Code it!
