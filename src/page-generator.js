const fs = require('fs');
function generateArray(internArray,managerArray,engineerArray) {
    console.log(internArray,managerArray,engineerArray)
    var managerHTML = ``
    for (let i=0;i<managerArray.length;i++){
      managerHTML += `
        <div class="card text-white bg-primary mb-3 align-self-center" style="max-width: 18rem;">
      <div class="card-header">${managerArray[i].name}</div>
      <div class="card-body">
        <h5 class="card-title">${managerArray[i].id} </h5>
        <h3 class="card-title"> Manager </h3>
        <p class="card-text"> Office number ${managerArray[i]. office} </p>
        <a class="text-white" href= "mailto:${managerArray[i].email}"> Email me! </a>
      </div>
  </div>
        `
    }
s  
  var internHTML = ``
  for (let i=0;i<internArray.length;i++){
      internHTML += `
      <div class="card text-white bg-primary mb-3 col " style="max-width: 18rem;">
    <div class="card-header">${internArray[i].name}</div>
    <div class="card-body">
      <h5 class="card-title">${internArray[i].id} </h5>
      <h3 class="card-title"> Intern </h3>
      <p class="card-text"> ${internArray[i].school} </p>
      <a class="text-white" href= "mailto:${internArray[i].email}"> Email me! </a>
    </div>
</div>
      `
  }
  
  var engineerHTML = ``
  for (let i=0;i<engineerArray.length;i++){
    engineerHTML += `
      <div class="card text-white bg-primary mb-3  col" style="max-width: 18rem;">
    <div class="card-header ">${engineerArray[i].name}</div>
    <div class="card-body">
      <h5 class="card-title">${engineerArray[i].id} </h5>
      <h3 class="card-title "> Engineer </h3>
      <a class="text-white" href= "https://github.com/${engineerArray[i].github}"> GitHub </a>
      <a class="text-white" href= "mailto:${engineerArray[i].email}"> Email me! </a>
    </div>
</div>
      `
  }
 
  var htmlTEXT = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Chart</title>
</head>

<body>
<header class=" bg-primary text-center text-white" > <h1>My Team Chart <h1> 
</header>
<div class = "container">
  <div class ="row">${managerHTML}</div>
  <div class = "row">${internHTML}</div>
  <div class = "row">${engineerHTML} </div>
  </div>
</body>
</html>

`
 console.log(htmlTEXT)
fs.writeFileSync("./testfile/index.html",htmlTEXT,function(err){
if(err) throw err;
console.log("- File Generated --")
})

};
module.exports = generateArray