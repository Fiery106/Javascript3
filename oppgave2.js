function regnTall() {
    let verdi = document.getElementById("input_feltet").value;
    let temperatur = document.getElementById("velg_temperatur").value;


    document.getElementById("demo").innerHTML = verdi + " grader " + temperatur + " tilsvarer:" 


    console.log(temperatur)
    if (temperatur == "Fahrenreit") {
        let celsius = (verdi - 32) / (9/5)
        let kelvin = (verdi - 32) * (5/9) + 273.15

        document.getElementById("sum1").innerHTML = celsius + " grader Celsius"
        document.getElementById("sum2").innerHTML = kelvin + " grader Kelvin"


    } else if (temperatur == "Celsius") {
        let fahrenreit = verdi * 9/5 + 32
        let kelvin = verdi + 273.15

        document.getElementById("sum1").innerHTML = fahrenreit + " grader Fahrenreit"
        document.getElementById("sum2").innerHTML = kelvin + " grader Kelvin"


    } else { //Kelvin
        let fahrenreit = verdi * 9/5 - 459.67
        let celsius = verdi - 273.15

        document.getElementById("sum1").innerHTML = fahrenreit + " grader Fahrenreit"
        document.getElementById("sum2").innerHTML = celsius + " grader Celsius"
    }
}