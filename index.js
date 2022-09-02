// TODO: Include packages needed for this application
const fs = require('fs');
const markDown=require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
// const questionCall=require("./utils/questionCall");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please enter the description of your project?",

      },
      {
        type: "input",
        name: "installation",
        message: "Please enter the steps to install your project for the end user?",
      },
      {
        type:"input",
        name:"usage",
        message:"Please enter Instructions for you Application ?"
      },
      {
        type:"input",
        name:"contribution",
        message:"Please provide information on how to contribute to your project ?"
      },
      {type:"input",
      name:"testingInstruction",
      message:"Please enter the instruction needed to test your application "
      },
      {
        type:"list",
        name:"license",
        message:"Please select one of the license?",
        choices:['Apache','BSD','BSD2','GPL','LGPL'
        ,'Mozilla','CommonDevelopment','Eclipse'
        ,'MIT','Community','GNU']
      },
      {type:"input",
      name:"gitHubUser",
      message:"Please enter your gitHub username ?"
      },
      {type:"input",
      name:"email",
      message:"Please enter your Email Address ?"
      },
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
