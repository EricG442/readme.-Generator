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
    `
}