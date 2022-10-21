// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ 
{
    type: 'input',
    name: 'title',
    message: 'what is the title of your repository?'
},
{
    type: 'input',
    name: 'author',
    message: 'list your name here'
},
{
    type: 'input',
    name: 'sections',
    message: 'What sections do you have?',
},
{
    type: 'input',
    name: 'description',
    message: 'what is the description of your project?',
},
//table of contents 
{
    type: 'input',
    name: 'installation',
    message: 'what installation steps does the user need in order to run your project?',
},
{
    type: 'input',
    name: 'Usage',
    message: 'what usage does your project propose?',
},
{
    type: 'list',
    name: 'License',
    message: 'select your license',
    choices: ['MIT License','GNU General Public License v3.0', 'The Unlicense', 'Mozilla Public License 2.0'],
},
{
    type: 'input',
    name: 'contributing',
    meessage: 'list contributors to your project here'
},
{
    type: 'input',
    name: 'tests',
    message: 'put tests here'
},
{
    type: 'input',
    name: 'questions',
    message: 'In case people have questions list your linkadin here'
},];
// // TODO: Create a function to write README file
function writeToFile(genreadme,data) {   

fs.writeToFile(genreadme, data, (err) =>
err ? console.log(err) : console.log('Your generated readme is complete')
); 
}
function init() {
inquirer
    .prompt(questions)
    .then(function(answers) {
    const initmarkdowncontent = markdown.genmarkdown(answers)
    const genReadMeFile = 'README.md'
    writeToFile(initmarkdowncontent, genReadMeFile)
})
}
init();
// TODO: Create a function to initialize app


// Function call to initialize app
