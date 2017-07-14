'use strict'
const {defineSupportCode} = require('cucumber');

const Chai = require('../world.js');
const chai = new Chai();

defineSupportCode(function({Given, When, Then}) {

	 Given('I go to {stringInDoubleQuotes}', (site, callback) => {
		browser.get(site)
			.then(callback);
	});

	When('I add {stringInDoubleQuotes} in the task field', (task) => {
		element(by.model('todoList.todoText')).sendKeys(task);
	});

	When('I click the add button', (callback) => {
		var el = element(by.css('[value="add"]'));
		el.click();
	});

	Then('I should see my new task in the list', () => {
		var todoList = element.all(by.repeater('todo in todoList.todos'));
		chai.expect(todoList.count()).to.eventually.equal(3);
		chai.expect(todoList.get(2).getText()).to.eventually.equal('Do not Be Awesome')
			.and.notify(callback);
	});


});
