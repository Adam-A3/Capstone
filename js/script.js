const hamburger = document.getElementById("hamburger"); //Creates hamburger variable
const navLinks = document.getElementById("navLinks"); //creates navLinks variable

hamburger.addEventListener("click", function () { //activates on click

    navLinks.classList.toggle("active"); //changes css class to active

});