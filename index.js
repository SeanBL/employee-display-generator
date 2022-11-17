const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email address?'
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is the managers office number?'
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
                    message: 'What is the employees name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employees ID?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the employees email address?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the employees GitHub username?'
                },
            ]
        }
    ])