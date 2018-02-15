
Feature: Uso de Calculadora Angular

    Scenario: Go to calculator's home page
        When i enter in the site's URL
        Then i should see the home page title

    Scenario: Add 1 + 2
        Given i enter in the site's URL
        When i add 1 and 2
        Then the calculator should give me the result "3"

    Scenario Outline: Add x + y
        Given i enter in the site's URL
        When i add <number1> and <number2>
        Then the calculator should give me the result <result>

        Examples:
            | number1 | number2 | result |
            | 10      | 22      | "32"   |
            | 99      | 123     | "222"  |
            | 12      | 99      | "111"  |
