// throw new Error('🚨 PLAYWRIGHT.CONFIG.JS IS LOADED 🚨');

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './',

  timeout: 120_000, // ⏱ 2 minutes per test,

  use: {
    headless: true,
    slowMo: 0,
    baseURL: process.env.BASE_URL || 'https://cr-mobile.tomati.app/',
    actionTimeout: 30_000,
    navigationTimeout: 60_000,
  },

  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
