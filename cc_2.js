// Task 1: Working with Arrays
// Store inventory
// Create an array for product inventory, modify it, and log changes to the console.

// Step 1: Declare an array with product names.
let products = ["Creatine Monohydrate", "Weighted Protein", "Pre Workout", "Energy Drink", "Oreo Protein Bar"];
console.log("Initial products:", products); // Log initial array

// Step 2: Add a new product to the array.
products.push("Protein Pancakes");
console.log("After adding a product:", products); // Log updated array

// Step 3: Remove the last product from the array.
products.pop();
console.log("After removing the last product:", products); // Log final array

// Task 2: Student Scores 
//Handle a list of scores, update the second score on the list, calcuate the average
// Will list based on alphabet grade
// Step 1: Declare an array of scores.
let scores = [99, 85, 89, 95, 78];
console.log("Initial scores:", scores);

// Step 2: Update the second score.
scores[1] = 90;
console.log("Updated scores:", scores); // Log updated array

// Step 3: Calculate the average score.
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
console.log("Average score:", average.toFixed(2)); // Log average

// OPTIONAL: Convert scores to letter grades (A-F).
let grades = scores.map(score => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
});
console.log("Scores with grades:", scores.map((score, i) => `${score} (${grades[i]})`));
