Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario Outline: Protractor and Cucumber Test
        Given I go to <site> 
        When I add <task> in the task field
        And I click the add button
        Then I should see my new task in the list

    Examples:
        | site                     | task         |
        | "https://angularjs.org/" | "Be Awesome" |