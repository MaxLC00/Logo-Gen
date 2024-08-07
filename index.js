const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('colors');
const { Circle, Square, Triangle } = require('./lib/shapes.js')

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
        name: 'textColor',
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
        name: 'textColor',
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
        name: 'shapeColor',
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

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const { text, textColor, shape, shapeColor } = answers;
        let newShape;

        switch (shape) {
            case 'Circle':
                newShape = new Circle(shapeColor);
                break;
            case 'Triangle':
                newShape = new Triangle(shapeColor);
                break;
            case 'Square':
                newShape = new Square(shapeColor);
                break;
        }

        const svg = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${newShape.render()}
            <text x="150" y="120" text-anchor="middle" font-family="Arial" font-size="40" fill="${textColor}">${text}</text>
        </svg>
        `;

        fs.writeFileSync('logo.svg', svg);
        console.log('Logo saved');

    } catch (error) {
        console.error(error);
    }
}


init();
