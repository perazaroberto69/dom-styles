# cs2-dom-styles

# Learning Target
I am learning how to control CSS styles using the DOM and JavaScript

# Success Criteria
- I can define a function and call it from HTML using the ```onclick``` attribute
- I can use ```let myVar = document.getElementById("someId")``` to store an HTML element in a JS variable
- I can set style properties using ```element.style.property = "new value";```


# Project Setup
1. Install *Live Server*
2. Create ```script.js```
3. Add ```console.log("Script started")``` to begining of ```script.js```
4. Add ```<script src="script.js"></script>``` before ```</body>``` tag in ```index.html``` to link the script
5. Create ```styles.css```
6. Add a ```body``` selector and set the background color and text color to whatever you like
7. Add ```<link rel="stylesheet" href="styles.css">```  in the ```<head>``` section to link the stylesheet to ```index.html```
8. Go live and verify that you see your CSS styles and use the inspection tool to check that you see ***Script started*** in the console to verify your script is linked correctly to your html 

# Essential Notes
- You must first use ```let element = document.getElementById("id")``` to store an element in a variable before you can set its styles (or do anything with it) in JavaScript
- Use ```element.style.property = "value";``` to set a new value for a CSS style property e.g. ```p.style.color = "red";```
- Style values are always written as strings (should be in "")
- CSS properties with dashes must be converted to camelCase e.g. ```background-color``` in CSS becomes ```backgroundColor``` in JavaScript

# Example
In this example we will see how to change the CSS style properties of an element using JavaScript and the DOM
1. Add a ```<p>``` tag with the id ```text``` underneath the ```<h1>``` with a sentence of text
    ```html
    <p id="text">This is some sample text</p>
    ```
2. Add a ```<button>``` under the paragraph with the text *Change style*
    ```html
    <button>Change style</button>
    ```
3. In ```script.js```, define a function named ```changeStyle()``` to call when the button is clicked. Inside the function, print "click" to the console
    ```js
    function changeStyle(){
        console.log("click");
    }
    ```
4. Add the attribute ```onclick="changeStyle()"``` to the button tag. Then test to verify that you see *click* in console when you click the button
    ```html
    <button onclick="changeStyle()">Change style</button>
    ```
5. In your function, use ```document.getElementById()``` to store the paragraph element in a variable. *Optional* set the ```innerText``` of the paragraph to something new.
    ```js
    // Get the p element and store it in a variable
    let p = document.getElementById("text");
    // Optional: Set some new text
    p.innerText = "The text has been changed";
    ```
6. Set some CSS style properties using ```p.style.property = "new value";```
    ```js
    p.style.color = "red";
    p.style.fontSize = "100px";
    p.style.border = "2px solid green";
    ```

# Exercise 1
Add a style reset button
1. Create a new ```<button>``` with the text *Reset*
2. Define a new function called ```resetStyle()```
3. Add ```onclick="resetStyle()"``` to your new button tag.  (Add ```console.log("click")``` inside the function like we did before to test that it works)
4. Use ```document.getElementById()``` to store the paragraph element in a variable again.
5. Set each style property to ```""``` to reset it e.g. ```p.style.color = "";```

# Exercise 2
Add a second button to give the text different styling
1. Create a new ```<button>``` with the text *Change to style 2*
2. Define a new function called ```changeStyle2()```
3. Add ```onclick="resetStyle()"``` to your new button tag.  (Add ```console.log("click")``` inside the function like we did before to test that it works)
4. Use ```document.getElementById()``` to store the paragraph element in a variable again.
5. Set some different CSS styles using ```p.style.property = "new value";```  

    - ```font-size```
    - ```font-family```
    - ```background-color```
    - ```border```
    - ```border-radius```
    - ```color```
    - ```text-align```

    **Remember** CSS properties with dashes need to be converted to camelCase

    - ```font-size``` in CSS is ```fontSize``` in JS
    - ```background-color``` in CSS is ```backgroundColor``` in JS
