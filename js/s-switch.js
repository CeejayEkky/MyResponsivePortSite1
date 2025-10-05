
const stySwitchTog = document.querySelector(".s-switch-tog");
stySwitchTog.addEventListener('click', () => {
    document.querySelector(".s-switch").classList.toggle("open");
})

window.addEventListener("scroll", () => {
    if(document.querySelector(".s-switch").classList.contains("open")){
        document.querySelector(".s-switch").classList.remove("open")
    }
})

const altStyle = document.querySelectorAll(".alt-style");
function setActStyle(c){
    altStyle.forEach((style) => {
        if(c === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
        }
    })
}

const logsO = document.querySelector(".logo")
const dNigh = document.querySelector(".d-night")
dNigh.addEventListener("click", () => {
    dNigh.querySelector("i").classList.toggle("fa-sun")
    dNigh.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");

})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dNigh.querySelector("i").classList.remove("fa-moon")
        dNigh.querySelector("i").classList.add("fa-sun")
        logsO.style.display = `none`;
    }
    else{
        dNigh.querySelector("i").classList.remove("fa-sun")
        dNigh.querySelector("i").classList.add("fa-moon")
        logsO.style.display = `block`;
    }
})

