const inquirer = require('inquirer');
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: projectName =>{
          if(projectName){
            return true;
          }else{
            console.log('please enter your name');
            return false;
          }
        }
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
        validate: projectName =>{
          if(projectName){
            return true;
          }else{
            console.log('please enter your name');
            return false;
          }
        }
      },
]

function inquire(){
    inquirer
    .prompt(questions)
    .then((answers)=>{
        return answers;
    })
}

function projectQuestion(){
    return new Promise((resolve,reject)=>{
        resolve(
            new Promise(resolveInquirer=>{
            resolveInquirer(inquire())
        }))
        reject((err)=>{
            console.log(err);
        })
    })
    
 
}


module.export={
    projectQuestion:projectQuestion()
}