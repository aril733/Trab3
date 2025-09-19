
document.querySelector("#b1").addEventListener("click", function() {
    if (document.querySelector("#p1o1").checked) {
        document.querySelector("#resposta1").style.display = "block";
        document.querySelector("#erro1").style.display = "none";
        document.querySelector("#b1").style.display = "none";
        document.querySelector("#pergunta2").style.display = "block"; 
    } else {
        document.querySelector("#erro1").innerText = "❌ Resposta errada!";
        document.querySelector("#erro1").style.display = "block";
    }
});

document.querySelector("#b2").addEventListener("click", function() {
    if (document.querySelector("#p2o1").checked) {
        document.querySelector("#resposta2").style.display = "block";
        document.querySelector("#erro2").style.display = "none";
        document.querySelector("#b2").style.display = "none";
        document.querySelector("#pergunta3").style.display = "block"; 
    } else {
        document.querySelector("#erro2").innerText = "❌ Resposta errada! ";
        document.querySelector("#erro2").style.display = "block";
    }
});

document.querySelector("#b3").addEventListener("click", function() {
    if (document.querySelector("#p3o1").checked) {
        document.querySelector("#resposta3").style.display = "block";
        document.querySelector("#erro3").style.display = "none";
        document.querySelector("#b3").style.display = "none";
    } else {
        document.querySelector("#erro3").innerText = "❌ Resposta errada!";
        document.querySelector("#erro3").style.display = "block";
    }
});
