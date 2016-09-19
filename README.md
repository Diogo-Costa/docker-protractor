# Protractor running on SauceLabs #


<a href="https://microbadger.com/images/diogocosta/protractor-saucelabs" title="Get your own version badge on microbadger.com"><img src="https://images.microbadger.com/badges/version/diogocosta/protractor-saucelabs.svg"></a>

This image contains a fully configured environment to run tests using Protractor and SauceLabs.

## Docker Image ##
#### Minimum requirement ####
[Docker:](https://www.docker.com) Having installed the Docker.<br />
[Pull Docker Image:](https://hub.docker.com/r/diogocosta/protractor-saucelabs/) Link to the container Image<br /><br />

Or run the command to pull the container in your environment with Docker Installed/Running:<br />
`docker pull diogocosta/protractor-saucelabs`

### Software Installed on the container ###
[Node.js:](https://nodejs.org)  The runtime platform for running JavaScript on the server side, including protractor tests;<br />
[NPM:](https://www.npmjs.com/)  Node.js package manager used to install protractor and any node.js modules specific tests may need;<br />
[Java SE 8:](https://www.java.com/pt_BR/)  Needed for Selenium;<br />
[Protractor:](http://angular.github.io/protractor) A test framework end-to-end for web applications;<br />

### Structure ###
To use the image should be added to the 'conf.js' the following variables sauceUser and sauceKey:<br />
Ex.:<br />
    `var userSauce = process.argv[3].substr(2);`<br />
    `var keySauce = process.argv[4].substr(2);`<br />
    `exports.config = {`<br />
        `sauceUser: userSauce,`<br />
        `sauceKey: keySauce,`<br />
    `//To be continued ...`
<br />
<br />
And the file `conf.js` have to be in the structure below:<br />
-src<br />
--e2e<br />
---conf.js<br />

###  Running Image ###
In order to run tests on a CI system, run the following command:<br />
`docker run --rm -v <location test project>:/automated diogocosta/protractor-saucelabs --sauceUser --sauceKey`

