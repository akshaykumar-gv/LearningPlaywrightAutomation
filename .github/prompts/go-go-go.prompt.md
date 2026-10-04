---
name: go-go-go
description: Update the parent README from the latest repository changes, review the diff, commit all intended project updates, and push the branch.
---

Update the parent README and commit the repository changes, including all relevant source additions and documentation updates.

1. Treat `LearningPlaywrightAutomation/` as the target Git repository. Run Git commands from that directory and do not commit changes from the outer workspace repository.
2. Inspect `git status`, the recent commits, and the files changed since the last README update. Include relevant tracked and untracked learning chapters, supporting files, and any related source updates that belong to the repository.
3. Update `LearningPlaywrightAutomation/README.md` so its project structure and file-purpose sections accurately describe the latest repository contents. Preserve the existing organization and writing style; do not rewrite unrelated sections.
4. Review the resulting diff and check that the README is internally consistent. Exclude generated output such as `test-results/`, `playwright-report/`, `allure-results/`, build artifacts, screenshots, secrets, and editor files from the commit.
5. Stage all intended repository changes, not just the README. Include the relevant new learning chapter files, supporting source files, and README edits. If there are pre-existing unrelated changes, leave them unstaged and clearly mention them.
6. Commit the staged changes with a concise message such as `docs: refresh README and sync latest changes`.
7. After a successful commit, push the current branch to the configured remote with `git push origin HEAD` (or the equivalent remote/branch command for this repo).
8. Report the commit hash, the files committed, the push status, and any remaining unstaged changes.

Do not claim success if the README was not changed when repository changes require documentation updates, if validation fails, if the commit fails, or if the push fails. Ask for confirmation before committing if the target repository, branch, or intended file set is ambiguous.
