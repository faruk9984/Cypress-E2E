const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "qhj1q7",
  video:true,

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl:"https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    watchForFileChanges:false,
    // defaultCommandTimeout:10000,
    // screenshotOnRunFailure:false,
  },
  env:{
    URL:"https://naveenautomationlabs.com/opencart/index.php?route=account/register"
  }
});
