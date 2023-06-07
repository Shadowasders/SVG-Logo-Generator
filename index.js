// TODO: Create a switch statement for each use of the svg (triangle, circle, square)
// use inquirer to ask the necessary setup questions (what shape, what size, what color, what text)
// use fs write file to create an svg file, and use string literals to put the users preferences into said svg
// to start, import inquirer and svg (watch end of class video)

const inquirer = require('inquirer');
const fs = require('fs');
const svgCreator = require('./utils/generateSvg');

const shapeList = ["Triangle", "Circle", "Square"];
const colorList = ["red", "blue", "green", "yellow", "white", "black", "brown", "pink", "purple", "orange"];
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your icon to be?',
        choices: shapeList,
    },
    {
        type: 'list',
        name: 'color',
        message: 'What color would you like your icon to be?',
        choices: colorList,
    },
    {
        type: 'list',
        name: 'textcolor',
        message: 'What color would you like your text to be?',
        choices: colorList,
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like on your icon? (3 Characters Max)',
    }
]


function writeFile(filename, data) {
    fs.writeFileSync(filename, data)
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            if (answers.text.length > 3){
                console.log("Your text must be less than 3 characters");
                return
            }
            const svg = svgCreator(answers);
                writeFile(`icon.svg`, svg);
                console.log("Your icon has been created!")  
        })
        .catch(error => {
            console.log(error)
        });

}

init();