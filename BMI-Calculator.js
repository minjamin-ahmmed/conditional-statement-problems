//Calculating BMI
let weight = 80;
let height = 1.7;

let BMI = weight / height ** 2;

if (BMI < 18.5) {
    console.log("You are Under Weight");
}

else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("You are Normal!")

}

else if (BMI >= 25 && BMI <= 29.9) {
    console.log("You are Overweight")
}

else {
    console.log("You are  obese!!!!")
}