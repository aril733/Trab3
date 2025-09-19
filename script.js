
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
        document.querySelector("#erro2").innerText = "❌ Resposta errada! No GaAs, os elétrons são compartilhados entre o gálio e o arsênio, criando ligações covalentes fortes. Isso é característico de semicondutores, que possuem estrutura semelhante ao diamante. Se fosse ligação iônica, haveria transferência completa de elétrons, formando íons, o que não acontece aqui. ";
        document.querySelector("#erro2").style.display = "block";
    }
});

document.querySelector("#b3").addEventListener("click", function() {
    if (document.querySelector("#p3o1").checked) {
        document.querySelector("#resposta3").style.display = "block";
        document.querySelector("#erro3").style.display = "none";
        document.querySelector("#b3").style.display = "none";
    } else {
        document.querySelector("#erro3").innerText = "❌ Resposta errada! O GaAs cristaliza em uma estrutura chamada “blenda de zinco”, que é basicamente uma rede cúbica de face centrada, igual à do diamante, mas alternando átomos de gálio e arsênio. Essa geometria é o que dá ao GaAs suas propriedades semicondutoras especiais. ";
        document.querySelector("#erro3").style.display = "block";
    }
});
