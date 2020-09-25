//console.log('Hello ya dingus');
// questions for user

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questins for inputs
const questions = [];

inquirer
	.prompt([
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
		{
			type: 'input',
			name: 'username',
			message: 'Please provide your github username',
		},
		{
			type: 'input',
			name: 'installation',
			message:
				'Please provide installation instructions in order separated by commas',
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Please provide usage criteria for your project',
		},
		{
			type: 'list',
			name: 'license',
			message: 'Please provide the license, if any your project is using',
			choices: ['MIT', 'GNU', 'APM', 'NPM', 'GitHub', 'CPAN'],
		},
		{
			type: 'input',
			name: 'contributing',
			message: 'Please add how others can contribute:',
		},
		{
			type: 'input',
			name: 'tests',
			message: 'Please provide how others may test this project:',
		},
		{
			type: 'input',
			name: 'fullname',
			message: 'Please provide your full name:',
		},
		{
			type: 'input',
			name: 'questions',
			message:
				'Please provide your email address asssociated with this project:',
		},
	])
	.then((answers) => {
		var newReadme = generateMarkdown(answers);
		fs.writeFile('exampleREADME.md', newReadme, (err) => {
			if (err) throw err;
			console.log('look at tat README!!!');
		});
	});
function init() {}
init();
