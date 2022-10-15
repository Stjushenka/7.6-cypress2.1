const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mfxfzd',
    e2e: {
        baseUrl: 'http://qamid.tmweb.ru',
        "retries": 1,
        "viewportHeight": 1200,
        "viewportWidth": 1920,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    }
});