const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let managerArray = []

function getInfo(){
    inquirer.prompt([
        {
            type:"list",
            name:"userMenu",
            message: "What would you like to do?",
            choices: ["Add Manager","Add Engineer", "Add Intern", "Exsit Application" ]
        }

  ])
  .then((answers) => {
      switch(answers.userMenu){
         case "Add Manager":
              addManager();
              break;
       case "Add Engineer":
                addEngineer();
                break;
        case "Add Intern":
                    addIntern();
                    break;
        case "Exsit App":
                     break; 
      }
  })
};

function addManager() {
inquirer.prompt([
    {
        type:"input",
        name:"name",
        message: "What is the Employee's Name",
        
    },
    {
        type:"input",
        name:"id",
        message: "What is the Employee's ID?",
        
    },
    {
        type:"input",
        name:"email",
        message: "What is the Employee email address?",
        
    },
    {
        type:"input",
        name:"office",
        message: "What is the Employee office number?",
        
    },
])

then((answers) => {
    let newManager = new Manager(answers.name,answers.id,answers.email,answers.office)
    managerArray.push(newManager);
    console.log(managerArray);
   getInfo()
})
}
