const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     specPattern: [
      'cypress/e2e/**/*.js', // Define path to feature files
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    on('task', {
        log(message) {
          console.log(message);
          return null;  
        },
      });
      return config;
    },
  },
});
