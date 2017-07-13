'use strict'

const Chai = require('../world.js');
const chai = new Chai();

module.exports = function () {
	this.Given(/^I go to "(.+)"$/, function (site, callback) {
		browser.get(site)
			.then(callback);
	});

	this.When(/^I add "(.+)" in the task field$/, function (task) {
		element(by.model('todoList.todoText')).sendKeys(task);
	});

	this.Then(/^I should see my new task in the list$/, function () {
		var el = element(by.css('[value="add"]'));
		el.click();
	});

	this.And(/^I click the add button$/, function (callback) {
		var todoList = element.all(by.repeater('todo in todoList.todos'));
		chai.expect(todoList.count()).to.eventually.equal(3);
		chai.expect(todoList.get(2).getText()).to.eventually.equal('Do not Be Awesome')
			.and.notify(callback);
	});
};
