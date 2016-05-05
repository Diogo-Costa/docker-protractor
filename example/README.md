# Protractor running on SauceLabs #

This image contains a fully configured environment to run tests using Protractor and SauceLabs.

## Docker Image ##
#### Minimum requirement ####
[Docker:](https://www.docker.com) Having installed the Docker.
[Pull Docker Image:](https://hub.docker.com/r/diogocosta/protractor-saucelabs/) Link to the container Image

Or run the command to pull the container in your environment with Docker Installed/Running:
`docker pull diogocosta/protractor-saucelabs`

### Software Installed on the container ###
[Node.js:](https://nodejs.org)  The runtime platform for running JavaScript on the server side, including protractor tests;
[NPM:](https://www.npmjs.com/)  Node.js package manager used to install protractor and any node.js modules specific tests may need;
[Java SE 8:](https://www.java.com/pt_BR/)  Needed for Selenium;
[Protractor:](http://angular.github.io/protractor) A test framework end-to-end for web applications;

### Structure ###
To use the image should be added to the 'conf.js' the following variables sauceUser and sauceKey:
Ex.:
    `var userSauce = process.argv[3].substr(2);`
    `var keySauce = process.argv[4].substr(2);`
    `exports.config = {`
        `sauceUser: userSauce,`
        `sauceKey: keySauce,`
    `//To be continued ...`

And the file `conf.js` have to be in the structure below:
-src
--e2e
---conf.js

###  Running Image ###
In order to run tests of an CI system, run the following command:
`docker run --rm -v <location test project>:/automated diogocosta/protractor-saucelabs --sauceUser --sauceKey`

