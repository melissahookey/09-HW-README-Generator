// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
function writeToFile(README, answers) {}

// TODO: Create a function to initialize app
function promptUser() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your project name?',
                name: 'projectname',
            },
            {
                type: 'input',
                message: 'Enter a brief project description: ',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the steps required to install your project?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Provide instructions and examples for use.',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'List contributors: ',
                name: 'contributors',
            },
            {
                type: 'input',
                message: 'Choose a license: ',
                name: 'license',
                choices: [
                    "Apache",
                    "GNU",
                    "MIT",
                    "BSD 2",
                    "BSD 3",
                    "Boost Software",
                    "Creative Commons Zero",
                    "Eclipse",
                    "GNU",
                    "Mozilla",
                    "The Unlicense"
                ]
            },
            {
                type: 'input',
                message: 'Are there any tests included?',
                name: 'tests',
            },
            {
                type: 'input',
                message: 'What do I do if I have a question or issue?',
                name: 'questions',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            
    ]);
}        
    //   call write to file here
async function init() {
    try {
            // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
            // Write new README.md to dist directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
}
// Function call to initialize app
init();
