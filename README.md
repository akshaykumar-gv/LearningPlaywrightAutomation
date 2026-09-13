# Learning Playwright Automation

Basic Playwright automation examples using TypeScript and `@playwright/test`.

## Prerequisites

- Node.js 18 or newer
- npm

## Install and set up

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/akshaykumar-gv/LearningPlaywrightAutomation.git
cd LearningPlaywrightAutomation
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

On Linux, install the browser system dependencies as well:

```bash
npx playwright install --with-deps
```

## Run tests

Run the complete test suite:

```bash
npx playwright test
```

Run tests with the browser visible:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/example2.spec.ts
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Generate tests with codegen

Start Playwright Codegen with a URL:

```bash
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter
```

Generate a test file directly from the recorded actions:

```bash
npx playwright codegen --target=playwright-test --output=tests/generated.spec.ts https://app.thetestingacademy.com/playwright/multiple_element_filter
```

Codegen opens a browser and records interactions. Copy or save the generated test into the `tests` directory, then run it with `npx playwright test`.

## Project structure

```text
.github/workflows/playwright.yml   GitHub Actions workflow for Playwright CI execution.
.gitignore                          Ignores generated output and editor dependency folders.
package.json                        Project metadata and Playwright test dependency declaration.
package-lock.json                   Locked dependency versions for reproducible installs.
playwright.config.ts                Playwright configuration and browser project definitions.
README.md                           Parent project documentation and quick-start instructions.
tests/                              Learning test chapters and examples.
  01_Basics/                         Beginner Playwright examples and scenario files.
  02_TestAnnotations/                Playwright test annotations and describe-style learning examples.
```

## File purpose

```text
.github/workflows/playwright.yml   Optional CI workflow that installs dependencies and runs Playwright tests.
.gitignore                          Keeps generated folders, dependency folders, local artifacts, and editor files out of Git.
package.json                        Declares the Playwright test package and version metadata.
package-lock.json                   Records the dependency tree used by the project.
playwright.config.ts                Sets the test directory, reporting mode, browser projects, and common Playwright options.
tests/01_Basics/                   Contains basic Playwright learning examples such as browser context and page-flow samples.
tests/02_TestAnnotations/          Contains annotation-focused Playwright examples such as describe-style test organization.
```