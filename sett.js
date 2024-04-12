function readMore() {
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Открыть";
        more.style.display="none";
    } else {
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
}



let btnTeam = document.querySelector(".btn__white");

btnTeam.addEventListener('click', function () {
    document.body.classList.toggle("white-team");
    logoText.classList.toggle("white-team");
});


document.addEventListener("keydown", function (event) {
    if (event.key === 't') {
        document.body.classList.toggle("white-team");

    } else if (event.key === 'd') { 
        document.body.classList.remove("white-team");
    }
});




