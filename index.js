// TODO: Include packages needed for this application
const fs = require('fs');
const markDown=require('./utils/generateMarkdown');
const inquirer = require('inquirer');
// const questionCall=require("./utils/questionCall");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
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
        name: "description",
        message: "Please enter the description of your project?",
        validate: projectName =>{
          if(projectName){
            return true;
          }else{
            console.log('please enter your name');
            return false;
          }
        }
      }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName,markDown(data),(err)=>{
    if (err) throw err;
    console.log("File saved");
  })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers)=>{
        return answers
    })
    .then((answers)=> {
        writeToFile("README.md", answers);
    }).catch({

    })
 
  
   
}

// Function call to initialize app
init();
