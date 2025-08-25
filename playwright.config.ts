import { defineConfig, devices } from '@playwright/test';

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
    headless: false,
    screenshot: 'on',
    trace: 'on',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});