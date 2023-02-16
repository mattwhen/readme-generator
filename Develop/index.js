// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Write a brief description of your project: ',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'GNU AGPLv3','GNU LGPLv3'],
    },
];


// Add the headers along with the user's input in the README file
const content = `# Project Title
 <br>
## Description 
 <br>`

// TODO: Create a function to write README file
function writeToFile() {
    fs.writeFile('README.md', content, (error) =>  
        error ? console.error(error) : console.log('Success!')
    ); 
};

// TODO: Create a function to initialize app
function init() {
    writeToFile(); 
}

// Call the inquirer
inquirer 
    .prompt(questions) // Prompts users with questions and takes user input
    .then((response) => {
        return response;
    })
    .then((data) => {
        console.log(data);
    });
// Function call to initialize app
init();

