const generateHtml = require('./src/template');
const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email address?'
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is the manager\'s office number?'
        },
        {
            type: 'loop',
            name: 'employee',
            message: 'Do you want to add another employee?',
            questions: [
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'Select an employee to add to the list',
                    choices: ['Engineer', 'Intern']
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the employee\'s name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employee\'s ID?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the employee\'s email address?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the employee\'s GitHub username?',
                    when: (choices) => choices.employeeType === 'Engineer'

                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the name of the intern\'s school?',
                    when: (choices) => choices.employeeType === 'Intern'
                }
            ]
        }
    ])
    .then((answers) => {
        const htmlPage = generateHtml(answers);

        fs.writeFile('index.html', htmlPage, (err) =>
            err ? console.log(err) : console.log('created index.html')
        );
    });