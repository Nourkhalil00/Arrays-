const divut = document.getElementById("div-ut");

// Oppretter nytt objekt
const mineBiler = [
    {
        merke: "tesla",
        lader: true,
        toppHastighet: 180,
    },
];

function skriveut() {
    let htmlTekst = ``;
    
    for (let i = 0; i < mineBiler.length; i++) {
        htmlTekst += `
            <p>Bilen min er en ${mineBiler[i].merke}.<br>
            Den har en topp hastighet på ${mineBiler[i].toppHastighet}<br>
            </p>
        `;
    }
    divut.innerHTML = htmlTekst;
}

skriveut();
