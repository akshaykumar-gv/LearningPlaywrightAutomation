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
tests/                           Learning chapters covering basics, annotations, locators, dropdowns, frames, mouse/keyboard actions, SVG interaction, JS alerts, multiple elements, web tables, session storage, and reporting.
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
    235_CssPsuedoClass.spec.ts   CSS pseudo-class examples for selecting rows and checkbox controls in a table.
    236_WebTablePagination.spec.ts Pagination-based lookup across multiple web-table pages.
    237_WebTablePaginationWithFunction.spec.ts Reusable helper function to find a paginated row and extract row data.
    238_Task26OrangeHr.spec.ts   OrangeHRM employee creation and deletion task covering web-table validation and pagination.
    239_TaskSep26Flipkart.spec.ts Flipkart product search task that iterates multiple result pages and prints product names and prices.
  08_Dropdowns/
    240_SimpleDD.spec.ts         Simple dropdown selection scenarios using HTML select elements.
    241_CustomDD.spec.ts          Custom dropdown interactions and click-based item selection.
    242_CustomDDType.spec.ts      Type-ahead custom dropdown selection examples.
  09_FramesIFrames/
    245_HandlingIFrames.spec.ts   Examples for switching into and out of iframe contexts.
    246_MultiFrame.spec.ts        Multi-frame navigation and interaction patterns.
    247_NestedFrames.spec.ts      Nested frame handling across parent and child document contexts.
    248_TaskSep29.spec.ts         Exercise covering iframe-based form interaction and validation.
  10_MouseActionNKeyboard/
    249_Keyboard.spec.ts          Keyboard event examples and key verification using page actions.
    250_HoverTest.spec.ts         Hover and mouse-state examples for interactive controls.
    251_DragnDrop.spec.ts         Simple drag-and-drop task examples.
    252_AdvDragnDrop.spec.ts      Advanced drag-and-drop flows with pointer interactions.
    253_ContextClick.spec.ts      Context-menu and right-click interaction examples.
    Task_01_01Oct.spec.ts         Mouse and keyboard activity practice task for interactive elements.
    Task_02_01Oct.spec.ts         End-to-end task covering login, value extraction, and assertions.
  11_JSAlerts/
    254_JSAlerts.spec.ts          Handling JavaScript alerts, confirm dialogs, and prompt flows.
  12_SVG/
    255_handleSVG.spec.ts         Clicks and extracts searchable product names from an SVG-based Flipkart toolbar.
    256_handleAdvSVG.spec.ts      Selects SVG shapes, verifies state changes, and reads bar chart data.
    256_handleSVGMap.spec.ts      Iterates an SVG country map and clicks interactive state regions.
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
tests/07_WebTables/              Includes web-table row selection, filtering, pagination, and task-driven table interaction examples.
tests/07_WebTables/235_CssPsuedoClass.spec.ts  Demonstrates CSS pseudo-class selectors for a table row and its nested checkbox control.
tests/07_WebTables/236_WebTablePagination.spec.ts  Locates a specific record across paginated table pages and prints its matching field values.
tests/07_WebTables/237_WebTablePaginationWithFunction.spec.ts  Reuses a helper function to search paginated tables and collect row details such as email and country.
tests/07_WebTables/238_Task26OrangeHr.spec.ts  Automates an OrangeHRM employee workflow with add, verify, delete, and pagination checks on the table.
tests/07_WebTables/239_TaskSep26Flipkart.spec.ts  Searches Flipkart products across pages and logs the product names and prices from the listing grid.
tests/08_Dropdowns/              Includes static and custom dropdown examples, including type-ahead selection patterns.
tests/08_Dropdowns/240_SimpleDD.spec.ts  Demonstrates simple static select-based dropdown handling.
tests/08_Dropdowns/241_CustomDD.spec.ts  Covers custom dropdowns that use click-based selection and dynamic option lists.
tests/08_Dropdowns/242_CustomDDType.spec.ts  Shows keyboard-driven custom dropdown interaction with typing and selection.
tests/09_FramesIFrames/          Includes iframe, multi-frame, and nested frame navigation and interaction examples.
tests/09_FramesIFrames/245_HandlingIFrames.spec.ts  Switches into and out of iframe contexts for isolated page actions.
tests/09_FramesIFrames/246_MultiFrame.spec.ts  Works with multiple frames on a page and validates element interaction in each context.
tests/09_FramesIFrames/247_NestedFrames.spec.ts  Navigates parent-child nested iframe structures and interacts with inner content.
tests/09_FramesIFrames/248_TaskSep29.spec.ts  Applies a combined frame-handling task to interact with a real form flow.
tests/10_MouseActionNKeyboard/   Includes hover, keyboard, drag-and-drop, context-click, and task-driven pointer examples.
tests/10_MouseActionNKeyboard/249_Keyboard.spec.ts  Verifies keyboard input and shortcut events using page.keyboard actions.
tests/10_MouseActionNKeyboard/250_HoverTest.spec.ts  Exercises hover state changes and pointer-driven interactions.
tests/10_MouseActionNKeyboard/251_DragnDrop.spec.ts  Demonstrates drag-and-drop actions using simple draggable elements.
tests/10_MouseActionNKeyboard/252_AdvDragnDrop.spec.ts  Covers advanced pointer-based drag/drop flows.
tests/10_MouseActionNKeyboard/253_ContextClick.spec.ts  Tests right-click/context-menu behavior on interactive elements.
tests/10_MouseActionNKeyboard/Task_01_01Oct.spec.ts  Practice task for mouse and keyboard interactions in a UI flow.
tests/10_MouseActionNKeyboard/Task_02_01Oct.spec.ts  End-to-end task covering sign-in, value extraction, and table assertions.
tests/11_JSAlerts/              Includes JavaScript alert, confirm, and prompt handling examples.
tests/11_JSAlerts/254_JSAlerts.spec.ts  Covers browser dialog handling with accept, dismiss, and prompt interaction flows.
tests/12_SVG/                  Includes SVG element interaction examples for search controls, charts, and geographic maps.
tests/12_SVG/255_handleSVG.spec.ts  Clicks an SVG search control and prints matching product names from the results.
tests/12_SVG/256_handleAdvSVG.spec.ts  Selects SVG shapes and chart elements while validating their state changes.
tests/12_SVG/256_handleSVGMap.spec.ts  Iterates SVG country map paths and clicks interactive state regions.
```