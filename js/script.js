const slides = document.querySelectorAll(".h-img img");
let slideIndex = 0; 
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide, 5000);
    }

}

function showSlide(i){

    if(i >= slides.length){
        slideIndex = 0;
    }
    else if(i < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
    setInterval(intervalid);
}

var typed = new Typed(".checks",{
    strings: ["a Frontend Developer", "a FullStack Developer","a UI/UX Developer", "a Backend Developer", "a Gaming App Developer", "a Content Creator", "a Data Analyst", "MERN Stack Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

