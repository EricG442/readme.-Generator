const generateMarkdown = (data) => {
    
    const generateProjectTitle = (projectTitle) => {
        return `# ${projectTitle}`;
    };
    
    const generateProjectDescription = (description) => {
        return description;
    };
    
    const tableOfContents = () => {
        return `* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributers](#contributers)
* [Questions](#questions)
        `;
    };
    
    const generateProjectInstallation = (install) => {
        return install;
    };

    const generateProjectUsage = (usage) => {
        return usage;
    };
    
    const generateProjectLicense = (license) => {
        if(license === 'MIT') {
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }else if(license === 'GNU GPLv3') {
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        }
        
        return license
    };
    
    const generateProjectContributers = (contributers) => {
        return contributers;
    };
    
    const generateProjectQuestions = (question) => {
        return question;
    };
    
    return `${generateProjectTitle(data.projectTitle)}
    
## Description

${generateProjectDescription(data.description)}

## Table of Contents

${tableOfContents()}

## Installation

${generateProjectInstallation(data.installation)}

## Usage

${generateProjectUsage(data.usage)}

## License

${generateProjectLicense(data.license)}

## Contributing

${generateProjectContributers(data.contributers)}

## Questions

${generateProjectQuestions(data.questions)}
    `;

};

module.exports = generateMarkdown;