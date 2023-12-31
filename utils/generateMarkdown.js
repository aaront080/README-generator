// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "BSD-3") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === "No license") {
    return " "
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  if (license === "GPL v3") {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
  if (license === "Apache 2.0") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  if (license === "BSD-3") {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
  if (license === "No license") {
    return " "
  }
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return " ";
  } else {
    return `This project is using the ${license} license. Click license badge for additonal license information.`
  }
}

// TODO: Create a function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## License

${renderLicenseSection(data.license)}

## Questions
For additional information please email me at ${data.email}. Please visit https://github.com/${data.username} for additional projects.

`;
}

module.exports = generateMarkdown;
