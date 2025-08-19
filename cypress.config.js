const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
 
module.exports = defineConfig({
  projectId: 'x5uffa',
  // Increase the default viewport size so pages render larger in the runner
  // viewportWidth: 1440,
  // viewportHeight: 900,
  e2e: {
    specPattern: [
      'cypress/e2e/4-features/*.feature', // Define path to feature files
      'cypress/e2e/3 -Matts-Tests/*.js', // Define path to feature files
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
