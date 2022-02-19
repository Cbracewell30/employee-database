const Employee = require("./Employee");

// creating manager class using the employee class (with the extend employee) for name, id, and email
class Manager extends Employee {
    constructor(name,id,email,office){
        //super lets the us the employee class to get the name id and email
    super(name,id,email);
    // setting the office number for the Manager
    this.office = office
    }

    getOffice(){
        return this.office
    };
}

module.exports = Manager