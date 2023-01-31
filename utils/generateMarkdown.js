// function to generate markdown for README
function generateMarkdown(data) {
// create variable to hold the license badge
var licenseBadge = "";
// save right license badge link to the variable
if (data.license == "MIT") {
licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if (data.license == "Apache") {
licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
} else if (data.license == "GPL") {
licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
} else if (data.license == "BSD") {
licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
} else {
licenseBadge = "[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
}
// create return with template literals for the README file and style it with markdown
return (` 
# Title: ${data.title} ${licenseBadge}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
* [Github](${data.github})
* [e-mail](${data.email})
`);
}

module.exports = generateMarkdown;
