// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if(license !=='None')
   {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
   }
   else{
      return ''
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   return `\n [License](#license) \n`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
      This Project is licensed under the ${license} license
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}                                   ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}                                                     

  ## Table of Content
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Test](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ## How to Contribute
   ${data.contribution}
  ## Tests
   ${data.testingInstruction}

  ## GitHub Account
  [Git Hub Account ${data.gitHubUser}](https://github.com/${data.gitHubUser}) 
 
  ## Contact Us
  Please feel free to reach out to us @ ${data.email} 
   `;
}

module.exports = generateMarkdown;
