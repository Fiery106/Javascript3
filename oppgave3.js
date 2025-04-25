var type = document.getElementById("type_fart").innerHTML;
var convert = 1609.34


function regnTall() {
    let verdi = document.getElementById("input_felt").value;


    if (type == "Meter") {
        document.getElementById("demo").innerHTML = verdi + "km/h tilsvarer:"
        document.getElementById("sum").innerHTML = verdi / convert + " miles " + "per hour!"
    } else {
        document.getElementById("demo").innerHTML = verdi + "m/h tilsvarer:"
        document.getElementById("sum").innerHTML = verdi * convert + " meter " + "per hour!"
    }
}


function bytteType() {
    if (type != "Miles") {
        type = "Miles"
        document.getElementById("type_fart").innerHTML = "Miles"
        regnTall()

    } else {
        type = "Meter"
        document.getElementById("type_fart").innerHTML = "Meter"
        regnTall()
    }
}