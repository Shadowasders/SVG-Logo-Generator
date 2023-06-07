// TODO: Create a switch statement for each use of the svg (triangle, circle, square)
// use inquirer to ask the necessary setup questions (what shape, what size, what color, what text)
// use fs write file to create an svg file, and use string literals to put the users preferences into said svg
// to start, import inquirer and svg (watch end of class video)
import inquirer from 'inquirer';
import fs from 'fs';
import { svgCreator } from './utils/generateSvg.js';

const shapeList = ["Triangle", "Circle", "Square"];
const colorList = ["red", "blue", "green", "yellow", "white", "black", "brown", "pink", "purple", "orange"];
const sizeList = ["small", "medium", "large"];
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
        type: 'list',
        name: 'size',
        message: 'What size would you like your icon to be?',
        choices: sizeList,
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
            // your logic about

            const svg = svgCreator(answers);

            inquirer.prompt([{
                type: 'input',
                name: 'filename',
                message: 'What would you like to name your file?',
            }]).then(res => {
                console.log(res);
                writeFile(`${res.filename}.svg`, svg);
            })
           
        })
        .catch(error => {
            console.log(error)
        });

}

init();