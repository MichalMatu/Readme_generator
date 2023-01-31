// When a user is prompted for information about the application repository, a high-quality, professional README.md is generated with:
// The title of my project
// Sections entitled:
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
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

var data = {};

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// function call to initialize program
init();