const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Employee info", () => {
        it("should return a string value", () => {
            const strName = "Ben";

            const employee = new Employee(strName);
            expect(employee.name).toBe(strName);
        });

        it("should return a string value", () => {
            const strId = "540";

            const employee = new Employee("Ben", strId);
            expect(employee.id).toBe(strId);
        });

        it("should return a string value", () => {
            const strEmail = "Ben@email.com";

            const employee = new Employee("Ben", "540", strEmail);
            expect(employee.email).toBe(strEmail);
        });
    });

    describe("employee class methods", () => {
        it("should return a string value", () => {
            const employee = new Employee("Ben", "540", "Ben@email.com");
            expect(employee.getName()).toBe("Ben");
        });

        it("should return a string value", () => {
            const employee = new Employee("Ben", "540", "Ben@email.com");
            expect(employee.getId()).toBe("540");
        });

        it("should return a string value", () => {
            const employee = new Employee("Ben", "540", "Ben@email.com");
            expect(employee.getEmail()).toBe("Ben@email.com");
        });

        it("should return a string value", () => {
            const employee = new Employee("Ben", "540", "Ben@email.com");
            expect(employee.getRole()).toBe("Employee");
        }); 
    });
});