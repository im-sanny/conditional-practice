/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight=20;
let height=1.70;
let BMI = weight  / (height ** 2 )
console.log('your BMI is =', BMI.toFixed(2));

if(BMI < 18.5){
    console.log('you are underweight')
}
else if(BMI >= 18.5 && BMI <=24.9) {
    console.log('you are normal')

    if(BMI >=25 && BMI <= 29.9){
        console.log( 'you are overweight')
    }
    if (BMI >= 30) {
        console.log('you are obese')
    } 
} 
else(BMI >= 18);{
    console.log('please eat enough and take healthy food at time')
}

