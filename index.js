const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const shapes = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for you logo:',
        validate: (answer) => answer.length > 3 ? colors.red('Must be three characters or less.') : true
    },
    {
        type: 'list',
        name: 'colorChoice',
        message: 'For the text; would you like to enter a color, or choose from list of colors?',
        choices: ['Enter my own (hex code or standard name)', 'Choose from a list']
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color (a keyword or hexadecimal number) for the text color:',
        when: ({ colorChoice }) => {
            if (colorChoice.indexOf('Enter my own (hex code or standard name)') > -1) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'color',
        message: 'Choose one of the following colors:',
        choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white'],
        when: ({ colorChoice }) => {
            if (colorChoice.indexOf('Choose from a list') > -1) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        type: 'list',
        name: 'shapeChoice',
        message: 'For the text; would you like to enter a color, or choose from list of colors?',
        choices: ['Enter my own (hex code or standard name)', 'Choose from a list']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color (a keyword or hexadecimal number) for the text color:',
        when: ({ shapeChoice }) => {
            if (shapeChoice.indexOf('Enter my own (hex code or standard name)') > -1) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'ShapeColor',
        message: 'Choose on of the following colors:',
        choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black'],
        when: ({ shapeChoice }) => {
            if (shapeChoice.indexOf('Choose from a list') > -1) {
                return true;
            } else {
                return false;
            }
        }
    },
]

function init() {
    return inquirer.prompt(questions);
}

init();