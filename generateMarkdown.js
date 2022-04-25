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
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#lincense)
  - [Contributing](#credits)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br>
  ${answers.license}

  ## Contributing
  ${answers.contributors}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.questions}
  <br>
  Find me on GitHub: [${answers.username}](https://github.com/${answers.username})
  <br>
  Email me with any questions: ${answers.email}
`;
}

module.exports = generateMarkdown;