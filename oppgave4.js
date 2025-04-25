let vekt = document.getElementById("bmi_vekt").value;
let hoyde = document.getElementById("bmi_hoyde").value;

function bmiResultat() {
    console.log(vekt)
    console.log(hoyde)


    let BMI = vekt / (hoyde * hoyde)

    document.getElementById("demo").innerHTML = "Basert på din høyde " + hoyde + "m og din kroppsvekt " + vekt + "kg er din beregnede BMI " + BMI
}