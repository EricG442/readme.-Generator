const inquirer = require('inquirer');
const markDownTown = require('./utils/generateMD.js');
const fs = require('fs');

let questions = [
    {
        type: 'input',
        message: 'Please enter the Project Title',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Please enter a brief project description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please inter a brief description on how to install your Project',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter a brief summary on how to use your Project',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please enter a license for your Project',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Other']
    },
    {
        type: 'input',
        message: 'Please enter your contributers for your Project',
        name: 'contributers'
    },
    {
        type: 'input',
        message: 'Please enter your giithub email or your website link',
        name: 'questions'
    }
];

const writeReadME = (response) => {
    let markdown = markDownTown(response);

    fs.writeFile('readME.md', markdown, error => {
        if(error) console.log(error)
        else console.log('Success!');
    })
}

const main = () => {
    inquirer
        .prompt(questions)
        .then(res => writeReadME(res));
};

main();