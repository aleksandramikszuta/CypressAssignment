const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tfdi47',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
