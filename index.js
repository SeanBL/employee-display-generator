
const generateHtml = require('./src/main-html-template');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const managerInfo = require('./src/manager-html-template');
const engineerInfo = require('./src/engineer-html-template');
const internInfo = require('./src/intern-html-template');
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
        
        let manager = new Manager(answers.name, answers.id, answers.email, answers.number);  
        let managerBox = managerInfo(manager);
        
        console.log(answers.employee[0].employeeType);
        //console.log(answers.employee);
        const eRole = answers.employee;
        let engineerArry = [];
        let internArry = [];

        for (let i = 0; i < eRole.length; i++) {
            if (eRole[i].employeeType === "Engineer") {
                console.log("engineer picked");
                let engineer = new Engineer(eRole[i].name, eRole[i].id, eRole[i].email, eRole[i].github);
                console.log(engineer);
                engineerArry.push(engineer);
            } else {
                console.log("intern picked");
                let intern = new Intern(eRole[i].name, eRole[i].id, eRole[i].email, eRole[i].school);
                console.log(intern);
                internArry.push(intern);
            }
            
        }
        console.log(engineerArry.length);
        console.log(internArry.length);
        //console.log(engineerName, engineerId, engineerEmail, engineerGithub);
        let engineerBox = engineerInfo(engineerArry);
        let fullHtmlPage = generateHtml(managerBox, engineerBox);
        console.log(engineerBox);

        fs.writeFile('index.html', fullHtmlPage, (err) =>
            err ? console.log(err) : console.log('created index.html')
        );

        
    });