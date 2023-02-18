// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
// Use the inquirer package to prompt the user with questions and save responses.
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: "Write a brief description of your project: ",
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please specifiy the installation instructions: ',
        name: 'userInstructions',
    },
    {
        type: 'input',
        message: 'Please describe the usage information: ',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'How can users contribute to this project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Please list the test instructions',
        name: 'testInstruction',
    },
    {
        type: 'input',
        message: 'Please provide your Github username so collaborators can reach you: ',
        name: 'githubUser',
    },
    {
        type: 'input',
        message: 'Please provide your email here: ',
        name: 'userEmail',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'GNU AGPLv3','GNU LGPLv3'],
    },
    {
        type: 'input', 
        message: 'Select the color of your badge',
        name: 'badgeColor',
    },
];
    // Call the inquirer
    inquirer 
    .prompt(questions) // Prompts users with questions and takes user input
    .then((data) => {
    // Add the headers along with the user's input in the README file
    const content = // Start of README content.
`![ScreenShot](https://img.shields.io/badge/License-${data.choices}-${data.badgeColor})
# Project Title
${data.projectTitle} <br>
## Table of contents <br>
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)]
## Description 
${data.description} <br>
## Installation 
${data.userInstructions} <br>
## Usage  
${data.usageInfo} <br>
## Contributions
${data.contribute} <br>
## Testing 
${data.testInstruction} <br>
## License
This license is covered under the ${data.license} license. <br>
## Questions
Have any questions or concerns? Reach me at https://github.com/${data.githubUser}
Email me at: ${data.userEmail}` 

    // Write data to a readme file
    fs.writeFile('README.md', content, (error) =>  
    error ? console.error(error) : console.log('Success!'));

    });
};
// Function call to initialize app
init();

