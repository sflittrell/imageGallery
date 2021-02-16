const displayedImage = document.querySelector('.displayed-img'); // Creates a variable from the <img class='displayed-img'> element in the html document
const thumbBar = document.querySelector('.thumb-bar'); // Creates a variable from the <div class='thumb-bar'> element in the html document

const btn = document.querySelector('button'); // Creates a variable from the <button> element in the html document
const overlay = document.querySelector('.overlay'); // Creates a variable from the <div class='overlay'> element in the html document

/* Looping through images
Sets the i variable to one, iterates by adding one to the variable i each loop, and loops while i is less than of equal to 5 (the total number of photos there are) */
for (let i = 1; i <= 5; i++) { 
    const newImage = document.createElement('img'); // Creates a new <img> element and references it to the new variable newImage
    newImage.setAttribute('src', 'images/pic' + i + '.jpg'); // Sets the src (source) attribute for newImage where i is the picture number listed in the name
    thumbBar.appendChild(newImage); // adds newImage to the thumbBar 
    newImage.onclick = function(e) { // sets an onclick event to the newImage 
        displayedImage.src = e.target.src; // where it changes the displayedImage source to the item that was clicked source
    }
}



/* Wiring up the Darken/Lighten button */
btn.onclick = function () { // creates an onclick event on the btn item
    let buttonClass = btn.getAttribute('class'); // gets the class attribute for the btn item and puts it in the buttonClass variable
    if (buttonClass === 'dark') { // checks to see if the btn class is dark and if so...
        btn.setAttribute('class', 'light'); // sets the class of btn to light
        btn.textContent = 'Lighten'; // and changes the text inside the button to Lighten
        overlay.style.backgroundColor = 'rgb(0,0,0,0.5)'; // and changes the background color of the overlay object in the CSS
    } else if (buttonClass === 'light') { // checks to see if the btn class is light and if so...
        btn.setAttribute('class', 'dark'); // sets the class of btn to dark...
        btn.textContent = 'Darken'; // and changes the text inside the button to Darken...
        overlay.style.backgroundColor = 'rgb(0,0,0,0)'; // and changes the background color of the overlay object in the CSS
    }
}
