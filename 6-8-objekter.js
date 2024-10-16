const divut = document.getElementById("div-ut");

//Oppretter nytt objekt-
const minBil = {
    merke: "Hyundai",
    topHastighet: 180,
    lader: true,
}

function skriveut(){
    let htmlTekst = `
    <p>Bilen min er en ${minBil.merke}.<br>
    Den har en topp hastighet på ${minBil.topHastighet}<br>
    </p>
    `;
    divut.innerHTML = htmlTekst;
}
skriveut();