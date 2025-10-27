jQuery vs JavaScript
jQuery was created in 2006 by John Resig. It was designed to handle Browser Incompatibilities and to simplify HTML DOM Manipulation, Event Handling, Animations, and Ajax.

For more than 10 years, jQuery has been the most popular JavaScript library in the world.
However, after JavaScript Version 5 (2009), most of the jQuery utilities can be solved with a few lines of standard JavaScript:

Finding HTML Element by Id
Return the element with id="id01":

jQuery
myElement = $("#id01");

JavaScript
myElement = document.getElementById("id01");

Finding HTML Elements by Tag Name
Return all <p> elements:

jQuery
myElements = $("p");

JavaScript
myElements = document.getElementsByTagName("p");

ADVERTISEMENT

REMOVE ADS

Finding HTML Elements by Class Name
Return all elements with class="intro".

jQuery
myElements = $(".intro");

JavaScript
myElements = document.getElementsByClassName("intro");

Finding HTML Elements by CSS Selectors
Return a list of all <p> elements with class="intro".

jQuery
myElements = $("p.intro");

JavaScript
myElements = document.querySelectorAll("p.intro");