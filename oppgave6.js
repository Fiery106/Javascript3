function lagEpost() {
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;

    document.getElementById("utskrift").innerHTML = "Din epostadresse er: " + fornavn + "." + etternavn + "@hansenpost.no"
}