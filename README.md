# README #

This project is for demonstrations only

### How to run tests of this project ###

* Pull code of this project
* For the first time, run 'npm install'
* Execute command 'npx cypress run' to run tests in background
* Execute command 'npx cypress open' to open Cypress application

### Setting up project from scratch ###

* Run command 'npm install cypress'
* Run command 'npx cypress open'. When application opens for the new project, esential files are being created.
* Depending on the OS, there could be that additional dependencies will be needed. Check here for more https://docs.cypress.io/guides/getting-started/installing-cypress#Linux-Prerequisites

### CI/CD ###

For this particular project, integration is done using GitHub Actions. File which is used: .github\workflows\npm-publish-github-packages.yml

This GitHub Action is triggered on every push, pulls code in remove machine and executes Cypress tests.

### Reporting ###

In this project 2 reporting examples are being used:

* Locally generated test run report. 

  Cypress config part '"reporter": "mochawesome"' allows to generate test report automatically. 

  This will generate HTML report in cypress project folder 'report\mochawesome-report'

* Cypress Cloud

  To have results stored in Cypress Cloud, registration or invitation from another user is needed, and Cypress must be configured and ran with specific cmd.

  In this particular case, projectId is added to config file:

    projectId: "1pkdhr"

  To simply run tests and store results in Cypress Cloud, execute cmd with parameters:

    npx cypress run --record --key da61273c-02f3-4de1-9086-2d6c5c867ca1