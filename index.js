const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatepage = require('./src/page-generator')

// creating empty arrays
let managerArray = []
let engineerArray = []
let internArray = []

//  Question prompt to get employee type

function getInfo(){
    inquirer.prompt([
        {
            type:"list",
            name:"userMenu",
            message: "What would you like to do?",
            choices: ["Add Manager","Add Engineer", "Add Intern", "Exit Application"]
        }

  ])
  // depending on the answer the application follows the correct path
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


// Manger questionaire 
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
    // create manager object with answers
]).then((answers) => {
    let newManager = new Manager(answers.name,answers.id,answers.email,answers.office)
    managerArray.push(newManager);
    getInfo()
})
}

// Engineer questionaire

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
        // create engineer object with answers
    ]).then((answers) => {
        let newEngineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
        engineerArray.push(newEngineer);
       getInfo()
    })
    
}
    
//Intern questionaire
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
            // create intern object with answers
        ]).then((answers) => {
            let newIntern = new Intern(answers.name,answers.id,answers.email,answers.school)
            internArray.push(newIntern);
           
           getInfo()
        })
    }

// Function sends objects to generate page to create html page
async function createDoc(){
console.log(internArray,managerArray,engineerArray);
console.log("generatepage")
   await generatepage(internArray,managerArray,engineerArray)

    
};

// initiating employee type function.
    getInfo();