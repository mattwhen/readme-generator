// Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');




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
        message: 'Please specify the installation instructions: ',
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
    // Call the inquirer function
    inquirer 
    .prompt(questions) // Prompts users with questions and takes user input and writes it into the README file.
    .then((data) => {
    const content = 
    // Start of README content utilizing template literal.
`![ScreenShot](https://img.shields.io/badge/License-${data.license}-${data.badgeColor})
# Project Title
${data.projectTitle} <br>
## Table of contents <br>
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)
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
    fs.writeFile('README_Gen.md', content, (error) =>  
    error ? console.error(error) : console.log('Success!'));

    return data;
}); 
};
// Function call to initialize app
init();

