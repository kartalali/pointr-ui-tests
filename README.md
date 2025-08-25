# Pointr UI Tests

Automated UI tests for validating blog article visibility and content analysis on the Pointr.tech website.  
Built with TypeScript and Playwright, integrated with GitHub Actions for CI/CD.

---

## 🚀 Getting Started

Follow these steps to clone and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/kartalali/pointr-ui-tests.git  
cd pointr-ui-tests
```

### 2. Install dependencies

```bash
npm install  
npx playwright install
```

---

## 🧪 Running Tests

Playwright is used for UI testing. To run all tests:

```bash
npx playwright test
```

To run tests only in Firefox:

```bash
npx playwright test --project=firefox
```

To run a specific test file:

```bash
npx playwright test tests/word-analysis.spec.ts
```

Test coverage includes:

- Blog page article visibility and structure  
- Dynamic navigation via "Read More" buttons  
- Content scraping and top 5 word frequency analysis  
- Screenshot and trace generation for each test step

---

## 🔄 CI/CD Integration

This project uses GitHub Actions for continuous integration:

- Every push or pull request to the `main` branch triggers automated tests  
- Tests run on both Chromium and Firefox browsers  
- HTML reports are generated and uploaded as artifacts  
- Workflow configuration is located in `.github/workflows/ci.yml`

---

## 📁 Folder Structure

```
pointr-ui-tests/
├── tests/                  # Playwright test files
├── utils/                  # Word analysis helper functions
├── output/                 # Screenshots and text output
├── playwright-report/      # HTML test reports
├── .github/workflows/      # CI/CD workflow config
└── playwright.config.ts    # Playwright test configuration
```


## 🧠 Developer Notes

- Written in TypeScript  
- Uses Playwright for browser automation  
- CI/CD powered by GitHub Actions  
- Includes `.gitignore` and modular test structure  
- Designed for maintainability and edge-case coverage

---

## 👤 Author

Ali Kartal – Senior QA Automation Engineer  
Specialized in UI/API testing, CI/CD pipelines, and edge-case debugging  
GitHub: [https://github.com/kartalali](https://github.com/kartalali)