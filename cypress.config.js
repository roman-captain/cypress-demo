const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://github.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    // github.com sits behind bot-scoring that occasionally soft-blocks a
    // click without an error, only in CI. Retry in CI runs, not locally.
    retries: { runMode: 2, openMode: 0 },
    setupNodeEvents(on, config) {},
  },
  env: {
    BASE_URL: 'https://petstore.swagger.io/v2',
  },
});
