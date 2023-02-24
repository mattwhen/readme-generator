# <b>README generator</b>

## <b>Description</b>
This application allows a user to quickly generate a README.md file by answering just a few questions such as the description, instllation, testing, etc. It saves the user a lot of time from having to manually create a README file from start as the file is automatically generated for you along with the user input in a new README.md file. 

## <b>Installation</b>
Vscode or a similar IDE must be used.
The repository must be cloned to the user's machine. It can be accessed with my repo: https://github.com/mattwhen/readme-generator
Node.js must be installed to run this application.
NPM must be installed.
The inquirer package must also be installed.

## <b>How to use</b>
In the terminal, change directory to the 'Develop' folder, then type the command 'node index.js' which will run the application using Node.js and answer the user prompts in the terminal. Once you see the 'Success!' log to the console, you will have then created your very own custom README_Gen file with your user inputs for each section. 

## <b>Challenges</b>
One of the challenges I encountered in this project was how to organize each function to complete a certain section of code without breaking it entirely. I couldn't figure out how to have the writeFile method in it's own function but is instead in the init() function. If I did have it in it's own function, it would skip over all the user prompts inside the init() function. 

## <b>Future features</b>
One of the first features I would implement is refactoring the code so each function does a certain thing for better readability purposes, the code works fine, but is still messy in my opinion. 

Another feature is prompting an error when the user inputs a invalid answer or format. For example, if the user puts in their email address without including the '@' symbol, it would prompt an error specifying that the format is incorrect. 

Additionally, adding a user prompt to include a user's social media profile using a series of checkboxes, then prompt the user to put their social media username for each platform accordingly so users can discover them.  


## <b>References</b>
My tutor, Jehun Jung, who has been an excellent help. :)

Lorem Ipsum Generator for user responses during project demo: 
https://loremipsum.io/generator/?n=1&t=s 
<br><br>

## <b>Live demo<b>
Live demonstration with a Youtube video: 
https://www.youtube.com/watch?v=dQABClYyeAM 
<br>

## <b>Deployed link to application:
https://github.com/mattwhen/readme-generator 

