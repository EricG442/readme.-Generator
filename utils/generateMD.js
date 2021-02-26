const generateMarkdown = (data) => {
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
    return install
};

const generateProjectLicense = (license) => {
    return `Fucking do something i'll figure out later`
};

const generateProjectContributers = (contributers) => {
    return contributers
};

const generateProjectQuestions = (question) => {
    return question
};

module.exports = generateMarkdown();