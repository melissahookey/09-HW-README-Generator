// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` 
  
  
  <h1>${answers.projectname}</h1>

  ## Description
  ${answers.description}
  ${why}
  ${learn}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#lincense)
  - [Credits](#credits)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}

  ## Credits
  ${username}
  ${contributors}
`;
}

module.exports = generateMarkdown;