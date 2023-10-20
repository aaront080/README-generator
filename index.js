// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of this project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for this project.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information for this project.",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines for this project?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions for this project?",
    },
    {
        type: "list",
        name: "license",
        message: "What type of license would you like to include with your project?",
        choices: ["MIT", "GPL", "CC--0"],
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
const createFile = data => {
    fs.writeFile("README.md", data, err => {
        if (err) {
            console.log(error);
            return;
        } else {
            console.log("README has been generated!")
        }
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(input => {
    return generateMarkdown(input);
})
.then (info => {
    return createFile(info);
})
.catch(err => {
    console.log(err);
})




