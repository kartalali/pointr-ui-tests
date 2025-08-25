import { defineConfig, devices } from '@playwright/test';

const isCI = process.env.CI === 'true';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],
  use: {
    headless: isCI ? true : false,
    screenshot: 'on',
    trace: 'on',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});