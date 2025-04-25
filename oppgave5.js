var tekst = document.getElementById("input_felt").value;


function skrivResultat(x) {
    document.getElementById("utskrift").innerHTML = x
}


function finnLengde() {
    let lengde = tekst.length

    skrivResultat(lengde)
}


function gjorStor() {
    let upper = tekst.toUpperCase()

    skrivResultat(upper)
}


function gjorLiten() {
    let lower = tekst.toLowerCase()

    skrivResultat(lower)
}


function oppdaterVerdi() { //verdien i input feltet oppdateres mens man skriver, slik at vi kan holde koden ryddigere
    tekst = document.getElementById("input_felt").value;
    console.log(tekst.length)
}