console.log("Script executed successfully");

let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    slideTimer = setTimeout(showSlides, 10000);
}

function currentSlide(n) {
    clearTimeout(slideTimer);         
    slideIndex = n - 1;               
    showSlides();                     
}

showSlides();