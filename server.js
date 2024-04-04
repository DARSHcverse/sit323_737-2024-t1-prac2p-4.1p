// Importing the express module
const express = require("express");


// Creating an express application
const app = express();

// Function to add two numbers
const addTwoNumber = (num1, num2) => {
    return num1 + num2;
}

// Function to subtracting two numbers
const subtraction = (num1,num2) =>{
    return num1 - num2;
}

// Function to subtracting two numbers
const multiplication = (num1,num2) =>{
    return num1 * num2;
}

// Function to subtracting two numbers
const division = (num1,num2) =>{
    return num1 / num2;
}

// Route to handle GET requests to "/addTwoNumber"
app.get("/addTwoNumber", (req, res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = addTwoNumber(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
});


// Route to handle GET requests to "/subtraction"
app.get("/subtraction", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = subtraction(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})

// Route to handle GET requests to "/multiplication"
app.get("/multiplication", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = multiplication(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})

// Route to handle GET requests to "/division"
app.get("/division", (req,res) => {
    try {
        // Parsing query parameters
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);

        // Handling errors using if to see the numbers are not a number or null for both num1 or num2
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Invalid! Please enter only numbers");
        }
        // Calculating the result
        const result = division(num1, num2);


        // Sending JSON response with the result
        res.json({ statuscode: 200, data: result });

    } catch (error) {
        console.error("error")
        res.status(500).json({statuscode:500, msg: error.toString() })
    }
})

// Defining the port for the server to listen on
const port = 3000;

// Starting the server and listening on the specified port
app.listen(port, () => {
    console.log("listening on port " + port);
});
