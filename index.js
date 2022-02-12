const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatepage = require('./src/page-generator')
let managerArray = []
let engineerArray = []
let internArray = []

function getInfo(){
    inquirer.prompt([
        {
            type:"list",
            name:"userMenu",
            message: "What would you like to do?",
            choices: ["Add Manager","Add Engineer", "Add Intern", "Exit Application"]
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
             default :
            createDoc();
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
        message: "What is the Employee's ID number?",
        
    },
    {
        type:"input",
        name:"email",
        message: "What is the Employee's email address?",
        
    },
    {
        type:"input",
        name:"office",
        message: "What is the Employee's office number?",
        
    },
]).then((answers) => {
    let newManager = new Manager(answers.name,answers.id,answers.email,answers.office)
    managerArray.push(newManager);
    getInfo()
})
}



function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message: "What is the Engineer's Name",
            
        },
        {
            type:"input",
            name:"id",
            message: "What is the Engineer's ID number?",
            
        },
        {
            type:"input",
            name:"email",
            message: "What is the Engineer's email address?",
            
        },
        {
            type:"input",
            name:"github",
            message: "What is the Engineer's GitHub username?",
            
        },
    ]).then((answers) => {
        let newEngineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
        engineerArray.push(newEngineer);
       getInfo()
    })
    
}
    

    function addIntern() {
        inquirer.prompt([
            {
                type:"input",
                name:"name",
                message: "What is the Intern's Name",
                
            },
            {
                type:"input",
                name:"id",
                message: "What is the Intern's ID number?",
                
            },
            {
                type:"input",
                name:"email",
                message: "What is the Intern's email address?",
                
            },
            {
                type:"input",
                name:"school",
                message: "What is the Intern's school name?",
                
            },
        ]).then((answers) => {
            let newIntern = new Intern(answers.name,answers.id,answers.email,answers.school)
            internArray.push(newIntern);
           
           getInfo()
        })
    }


async function createDoc(){
console.log(internArray,managerArray,engineerArray);
console.log("generatepage")
   await generatepage(internArray,managerArray,engineerArray)

    
};
    getInfo();