//console.log('Hello ya dingus');
// questions for user

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questins for inputs
const questions = [];

inquirer.prompt([
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please provide a description of your project',
	},
]);
