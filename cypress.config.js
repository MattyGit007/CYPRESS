const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
 
module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/**/*.feature', // Changed to .feature files for cucumber
      'cypress/e2e/**/*.js', // Keep existing .js files if needed
    ],
    async setupNodeEvents(on, config) {
      // Add cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);
      // Set up esbuild preprocessor with cucumber plugin
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
 
      // Your existing task
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
