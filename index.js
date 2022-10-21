//packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const util = require('util');
// const md = require("./generateMarkdown.js");
const generateReadme = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

//array of questions for user input
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
//table of contents 
{
    type: 'input',
    name: 'description',
    message: 'what is the description of your project?',
},
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
    name: 'license',
    message: 'select your license',
    choices: ['MIT','GNU GPLv3', 'ISC', 'Mozilla 2.0'],
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
    name: 'GitHub',
    message: 'please enter your Github username'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email'
}];

// If there is no license, return an empty string
function renderLicenseBadge(value) {
   
        if(value === "GNU GPLv3"){
      
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        }
    
        else if(value === "ISC"){
          return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      
        }
        else if(value ==="MIT"){
      
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        }
        else if(value ==="Mozilla" ){
          return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        }
        else if(value === "" || value ==="N/A"){
          return "N/A";
        }
      
      }
//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateReadme(data), function(err) {
      if (err) {
          return console.log(err);
      }
  });
  
  }
//function to initialize app
function init() {
inquirer
    .prompt(questions)
    .then((answers) => {
    answers.getLicense = renderLicenseBadge(answers.license);
    writeToFile("newREADME.md", answers);
});
}
// Function call to initialize app
init();




