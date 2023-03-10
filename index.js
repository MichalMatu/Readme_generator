// importing fs, path, and inquirer
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// import generateMarkdown function from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user input for README file generation 
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license.",
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "BSD",
            "None"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address."
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your Github address."
    },
];
// Get the data from the form and create a new object
var data = {};

// function to write README file using the data from the form 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program and prompt user for input then call the writeToFile function
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README_gen.md", generateMarkdown(answers));
    })
}

// function call to initialize program
init();