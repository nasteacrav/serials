let score = 0;

function correct(){
    score++;

    document.getElementById("result").innerHTML =
    "Scorul tău este: " + score;
}

function wrong(){

    document.getElementById("result").innerHTML =
    "Scorul tău este: " + score;
}

function toggleMenu(){

    document.getElementById("menu").classList.toggle("active");
}