//TODO: Create a switch statement for each use of the svg (triangle, circle, square)
//use inquirer to ask the necessary setup questions (what shape, what size, what color, what text)
//use fs write file to create an svg file, and use string literals to put the users preferences into said svg
//to start, import inquirer and svg (watch end of class video)
const inquirer = require('inquirer');
const fs = require('fs');
const svgCreater = require('./utils/generateSvg');

const questions = [
    {
        type: 'input',
        name: 'shape',
        message: 'What shape would you like your icon to be?'
    },
    {
        
    }
]


function writeFile(filename, data) {
    fs.writeFileSync(filename,data)
}

function init() {
    inquirer.createPromptModule(questions)
}