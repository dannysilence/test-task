const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://scratch.mit.edu',
    viewportWidth: 1920,
    viewportHeight: 1080
  }
});
