const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Engineer info", () => {
        it("should return a string value", () => {
            const strName = "Reyna";

            const engineer = new Engineer(strName);
            expect(engineer.name).toBe(strName);
        });

        it("should return a string value", () => {
            const strId = "E99";

            const engineer = new Engineer("Reyna", strId);
            expect(engineer.id).toBe(strId);
        });

        it("should return a string value", () => {
            const strEmail = "Reyna@test.com";

            const engineer = new Engineer("Reyna", "E99", strEmail);
            expect(engineer.email).toBe(strEmail);
        });

        it("should return a string value", () => {
            const strGithub = "ReynaH";

            const engineer = new Engineer("Reyna", "E99", "Reyna@test.com", strGithub);
            expect(engineer.github).toBe(strGithub);
        });
    });
    describe("intern class methods", () => {
        it("should return the engineer's GitHub username", () => {
            const engineer = new Engineer("Reyna", "E99", "Reyna@test.com", "ReynaH");
            expect(engineer.getGithub()).toBe("ReynaH");
        });

        it("should return employee's role", () => {
            const engineer = new Engineer("Reyna", "E99", "Reyna@test.com", "ReynaH");
            expect(engineer.getRole()).toBe("Engineer");
        });
    });
});