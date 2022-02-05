const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,id,email,offnum){
        super(name,id,email);
        this.offnum = offnum
    }
    getOffNum(){
        return this.offnum
    };
    
};

module.exports = Manager