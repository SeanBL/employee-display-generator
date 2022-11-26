const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("manager info", () => {
        it("should return a string value", () => {
            const strName = "John";

            const manager = new Manager(strName);

            expect(manager.name).toBe(strName);
        });

        it("should return a string value", () => {
            const strId = "007";

            const manager = new Manager("John", strId);
            expect(manager.id).toBe(strId);

        });

        it("should return a string value", () => {
            const strEmail = "test@email.com";

            const manager = new Manager("John", "007", strEmail);
            expect(manager.email).toBe(strEmail);
        });

        it("should return a number value", () => {
            const officeNumber = 12;

            const manager = new Manager("John", "007", "test@email.com", officeNumber);
            expect(manager.officeNumber).toEqual(12);
        });
    });
    describe("manager class methods", () => {
        it("should return manager's office number", () => {
            const manager = new Manager("John", "007", "test@email.com", 12);

            expect(manager.getOfficeNumber()).toEqual(12);
        });

        it("should return employee's role", () => {
            const manager = new Manager("John", "007", "test@email.com", 12);

            expect(manager.getRole()).toBe('Manager');
        });
    });
});