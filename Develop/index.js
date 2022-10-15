const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = ({
  projectTitle,
  description,
  tableOfContents,
  installation,
  usage,
  license,
  contributing,
  tests,
  userName,
  userEmail,
}) =>
  `# ${projectTitle}
  ## Table of Contents:
  ## Description: 
  ${description}
  ## Installation: 
  ${installation}
  ## Usage:
  ${usage}
  ## License:
  ${license}
  ## Contributing:
  ${contributing}
  ## Tests:
  ${tests}
  ## Questions:
  ${userName}
  ${userEmail}
  `;

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is a short description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What installation is needed for your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How is your project used?",
    },
    {
      type: "input",
      name: "contributing",
      message: "What is contributing to this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What testing what done on this project?",
    },
    {
      type: "list",
      name: "license",
      message: "Which license is being used for this project?",
      choices: ["MIT", "ANT", "THE", "LIC"],
    },
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub Username?",
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your email?",
    },
  ])
  .then((answers) => {
    const readMeContent = generateReadme(answers);

    fs.writeFile("README.md", readMeContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme.md!")
    );
  });
