const Employee = require("./Employee");

// creating Engineer class using the employee class (with the extends employee) for name, id, and email
class Engineer extends Employee{
    constructor(name,id,email,github){
     //super lets the us the employee class to get the name id and email
        super(name,id,email);
        // setting the github for the Engineers
        this.github = github
    }
    getGitHub(){
        return this.github
    };
    
};

module.exports = Engineer