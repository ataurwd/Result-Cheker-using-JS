// Example weight and height values
let weight = 70; // weight in kilograms
let height = 1.75; // height in meters

// Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
let bmi = weight / (height * height);

// Declare a variable to hold the health category
let healthCategory;

// Determine the health category based on the BMI value using nested if-else statements
if (bmi < 18.5) {
    healthCategory = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    healthCategory = "Normal";
} else if (bmi >= 25 && bmi <= 29.9) {
    healthCategory = "Overweight";
} else {
    healthCategory = "Obese";
}

// Output the BMI value and the health category
console.log(healthCategory);
