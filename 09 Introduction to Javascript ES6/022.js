// the BMI calculator
/*
BMI = weight/height^2
weight in kgs and height in meters
*/

function bmiCalculator(weight,height){
    var bmi = weight/(height*height);
    return bmi;
}
var bmi=bmiCalculator(65,1.8); // bmi should be around 20
console.log(bmi);