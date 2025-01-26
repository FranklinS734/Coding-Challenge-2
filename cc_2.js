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

// OPTIONAL (will convert numerical values to show letter grade): Convert scores to letter grades (A-F).
let grades = scores.map(score => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
});
console.log("Scores with grades:", scores.map((score, i) => `${score} (${grades[i]})`));

// TASK 3: Employee Records
// Creating an employee object, modifying it, and log updates to the console.

// Step 1: Declare an object with employee details.
let employee = {
    name: "Sunny Man",
    age: 33,
    department: "Information Systems",
    isActive: true
};
console.log("Initial employee record:", employee);

// Step 2: Update the department property.
employee.department = "Software Development";
console.log("After updating department:", employee);

// Step 3: Add a new property "position" to the object.
employee.position = "Product Management";
console.log("Final employee record:", employee);

// TASK 4: Customer Database
// Manage a customer database with multiple customer records

// Step 1: Declare an array of customer objects.
let customers = [
    { name: "Justin Gomez", email: "yeetsd43@gmail.com", purchaseAmount: 30 },
    { name: "Neil So", email: "SBDaG834@hotmail.com", purchaseAmount: 5000 },
    { name: "Andy Murph", email: "AMurph0A@gmail.com", purchaseAmount: 400 }
];
console.log("Initial customer list:", customers);

// Step 2: Adding a new customer to the array.
customers.push({ name: "Adam Allen", email: "Non787@gmail.com", purchaseAmount: 550 });
console.log("Updated customer list:", customers);

// TASK 5: Order Processing System
// Create an order object with a method to calculate tax.

// Step 1: Declare an object for an order.
let order = {
    orderId: 163577,
    customerName: "Justin G.",
    amount: 550,

    // Step 2: Add a method to calculate tax (10% tax rate).
    calculateTax: function() {
        return this.amount * 0.1;
    }
};

// Step 3: Logging the order details and tax amount to the console.
console.log("Order details:", order);
console.log("Tax amount:", order.calculateTax().toFixed(2));