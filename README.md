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
npx playwright test tests/01_Basics/example2.spec.ts
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
.github/
  prompts/
    go-go-go.prompt.md            Prompt instructions for the repository task flow and structured work.
  workflows/
    playwright.yml               Optional GitHub Actions workflow for Playwright test execution.
.gitignore                        Ignores generated output, local environment files, and editor artifacts.
package.json                      Project metadata and Playwright test dependency declaration.
package-lock.json                 Locked dependency versions for reproducible installs.
playwright.config.ts              Playwright configuration, browser projects, and Allure setup.
storageStage.json                 Shared browser storage snapshot used by session-state examples.
README.md                        Parent project documentation and quick-start instructions.
tests/                           Learning chapters covering basics, annotations, locators, multiple elements, web tables, session storage, and reporting.
  01_Basics/
    220_BCP.spec.ts              Basic browser control and page interaction examples.
    221_BCP_More.spec.ts          Additional browser flow and interaction scenarios.
    222.ContextWithOptions.spec.ts Browser context configuration and option samples.
    example.spec.ts              Simple starter Playwright example.
    example2.spec.ts             Additional example workflow for quick learning.
  02_TestAnnotations/
    223_TestAnnotations.spec.ts  Example use of Playwright test annotations.
    224_TADescribe.spec.ts       Describe-based grouping and test organization examples.
  03_LocatorsAndCommands/
    225_LC_GotoOptions.spec.ts   Tests covering page.goto() options and navigation behavior.
    226_LocatorStrats.spec.ts    Locator strategy examples using roles, labels, CSS, and text.
    227_15SepTask.spec.ts        Task-focused locator and interaction practice.
    228_17SepTask.spec.ts        Form and multiple-element filtering exercise.
  04_SessionStorage/
    229_GenerateSessionStorage.ts Generate a saved login session using browser storage state.
    229_SessionStorageExample.spec.ts Reuse the stored session for dashboard-based assertions.
  05_AllureReporting/
    230_StorageStateExample.spec.ts Use storageState with Playwright and Allure reporting.
  06_HandlingMultipleElements/
    231_MEH.spec.ts              Multiple-element locator examples and interaction flows.
    232_MEHGetAttribute.spec.ts  Examples for reading attributes from multiple matching elements.
  07_WebTables/
    233_HandlingWebTable.spec.ts Handling web-table lookup and dynamic row selection examples.
    234_WebtablesTask.spec.ts    Task-based web-table interaction exercise.
```

## File purpose

```text
.github/prompts/go-go-go.prompt.md  Prompt instructions for repository tasks and structured workflow guidance.
.github/workflows/playwright.yml    Optional CI workflow that installs dependencies and runs Playwright tests.
.gitignore                          Keeps generated folders, local environment files, and editor artifacts out of Git.
package.json                        Declares the Playwright test package and version metadata.
package-lock.json                   Records the dependency tree used by the project.
playwright.config.ts                Sets the browser projects, screenshots, and Allure reporter configuration.
storageStage.json                  Stores a reusable login session for direct dashboard examples.
README.md                          Explains setup, usage, and the structure of the learning repository.
tests/01_Basics/                  Includes beginner examples for browser flow, context setup, and page interactions.
tests/02_TestAnnotations/         Includes annotation-focused examples using test naming and describe blocks.
tests/03_LocatorsAndCommands/     Includes locator strategies, page commands, and task-driven learning exercises.
tests/04_SessionStorage/          Includes helpers that generate and reuse browser storage state for logged-in flows.
tests/05_AllureReporting/         Includes reporting examples that validate stored-session flows with Allure.
tests/06_HandlingMultipleElements/ Includes examples that work with collections of matching elements and attributes.
tests/07_WebTables/              Includes web-table row selection, filtering, and task-driven table interaction examples.
```