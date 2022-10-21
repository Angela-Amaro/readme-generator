

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //format readme here https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  return `# ${data.title}
  ## ${data.getLicense}
  ## author
  ${data.author}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  ## description
  ${data.description}
  ## Installation
   ${data.installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.getLicense}
  ${data.license}
  ## contributing
  ${data.contributing}
  ## tests
  ${data.tests}
  ## questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
