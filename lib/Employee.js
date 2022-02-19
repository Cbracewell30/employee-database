// Creating employee classs.
class Employee {
    // setting object items
    constructor(name,id,email){
        this.name=name
        this.id=id
        this.email=email
 
    }
    // creat's function to return name
    getName(){
        return this.name
    }
    // creat's function to return id
    getId(){
        return this.id
    }
    // creat's function to return email
    getEmail(){
        return this.email
    }

}

module.exports = Employee