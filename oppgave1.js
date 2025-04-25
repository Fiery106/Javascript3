function regnTall() {
    let verdi = document.getElementById("input_feltet").value;

    let sum_halvpart = document.getElementById("sum_halvpart");
    let sum_dobbelt = document.getElementById("sum_dobbelt");
    let sum_tredobbelt = document.getElementById("sum_tredobbelt");
    let sum_gangetmedseg = document.getElementById("sum_gangetmedseg");



    sum_halvpart.innerHTML = "Halvpartet av tallet er lik: " + verdi / 2;
    sum_dobbelt.innerHTML = "Dobbeltet av tallet er lik: " + verdi * 2;
    sum_tredobbelt.innerHTML = "Tredobbeltet av tallet er lik: " + verdi * 3;
    sum_gangetmedseg.innerHTML = "Tallet ganget med seg er lik: " + verdi * verdi;
}