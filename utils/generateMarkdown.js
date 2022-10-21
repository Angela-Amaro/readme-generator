// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return "![repository]('https://img.shields.io/github/license/<Github-Username>/<Repository>')" + license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
  return  "https://opensource.org/licenses/" + license
  }
  else {
  return "";
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //fotmat readme here https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
  return `# ${data.title}
  ${renderLicenseBadge}
  ${renderLicenseLink}
  ${renderLicenseSection}
`;
}

module.exports = generateMarkdown;
