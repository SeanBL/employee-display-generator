// const Manager = require("../lib/manager");
// const Engineer = require("../lib/engineer");
// const Intern = require("./intern-html-template");

generateHtml = (managerBox, engineerBox, internBox) => {
 let htmlTemp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employees</title>
<head>
<body>
    <header>
        <h1 class="header">My Team</h1>
    </header>
    <div class="flex-container">
        ${managerBox}
    </div>
    <div>
        ${engineerBox}
    </div>
    <div>
        ${internBox}
    </div>
    
`
return htmlTemp;
};

module.exports = generateHtml;
