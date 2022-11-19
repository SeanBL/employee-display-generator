const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.getGithub;
    }

    getRole() {
        return "intern";
    }
}

module.exports = Intern;