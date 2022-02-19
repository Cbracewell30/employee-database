const Employee = require("./Employee");

// creating intern class using the employee class (with the extends employee) for name, id, and email
class Intern extends Employee{
    constructor(name,id,email,school){
            //super lets the us the employee class to get the name id and email.
        super(name,id,email);
        // setting the school for the Intern
        this.school = school
    }
    getSchool(){
        return this.school
    };
    
};

module.exports = Intern