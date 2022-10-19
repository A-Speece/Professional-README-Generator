// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case "IBM":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";

    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[Link to license](https://opensource.org/licenses/MIT)";

    case "IBM":
      return "[Link to license](https://opensource.org/licenses/IPL-1.0)";

    case "Apache":
      return "[link to license](https://opensource.org/licenses/Apache-2.0)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License:
  ${license}
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
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
  ${renderLicenseBadge(license)}
  ## Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Test](#tests)
  7. [Questions](#questions)
  ## Description: 
  ${description}
  ## Installation: 
  ${installation}
  ## Usage:
  ${usage}
  ${renderLicenseSection(license)}
  ## Contributing:
  ${contributing}
  ## Tests:
  ${tests}
  ## Questions:
  GitHub Username: ${userName}
  Email: ${userEmail}
  `;

module.exports = generateReadme;
