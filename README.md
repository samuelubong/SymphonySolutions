#API aand UI Test Tasks. 
#Steps to run this Cypress automated tests locally and on CI:

Locally:

1. Install VS Code editor and NodeJs on your local machine.

2. Clone this GitHub repository onto your local machine.

3.  Once the Clone request is complete, open the Cypress Test Runner by running the following command in your VS Code terminal:

    npx cypress open - if you want to run in headed (browser) mode.

   This will launch the Cypress Test Runner where you can choose API_Test_Task.cy.js and UI_Test.cy.js tests files listed in the Spec. Click on any test to run it in      the browser.

4.  To run all the tests, use the following command:

    npx cypress run

5.  You can also run a specific test by specifying the path to the test file: Example are shown below

    npx cypress run --spec "cypress/e2e/API_Test_Task.cy.js"

    npx cypress run --spec "cypress/e2e/UI_Test.cy.js"

6.  Cypress will generate reports for all test runs in the cypress/reporters/mochawesome-report directory. You can view these reports to check the results of your         tests in html and Json file formats.

On CI:

1.  Clone this GitHub repository onto your CI platform.

2.  Install the necessary dependencies, including Node.js and Cypress, on your CI platform. You can use a package manager like npm or yarn to install these                 dependencies.

3.  Set up your CI platform to run Cypress tests. This will typically involve creating a new job or task that executes a command to run the Cypress tests.

4.  Use the below command to run this Cypress tests using the Cypress CLI:

    cypress run --headless --browser chrome --spec "cypress/e2e/API_Test_Task.cy.js"

    cypress run --headless --browser chrome --spec "cypress/e2e/UI_Test.cy.js"

It's also worth noting that many CI platforms have built-in support for running Cypress tests, 
and you may be able to set up your tests using a graphical interface or wizard rather than manually configuring the job. 
Check your CI platform's documentation for more information on how to set up Cypress tests.
