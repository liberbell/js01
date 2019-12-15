const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(current) {
    // e.preventDefault();
    // CTA.classList.toggle("hide");
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooops!" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}

CTA.addEventListener('click', function() { reveal(this); }, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
