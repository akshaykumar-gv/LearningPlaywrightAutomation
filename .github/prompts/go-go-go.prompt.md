---
name: go-go-go
description: Update the parent PlaywrightLearning README from the latest repository changes, review the diff, and commit the intended code and documentation changes.
---

Update the parent README and commit the repository changes.

1. Treat `PlaywrightLearning/` as the target Git repository. Run Git commands from that directory and do not commit changes from the outer workspace repository.
2. Inspect `git status`, the recent commits, and the files changed since the last README update. Include relevant tracked and untracked learning chapters or supporting files.
3. Update `PlaywrightLearning/README.md` so its project structure and file-purpose sections accurately describe the latest repository contents. Preserve the existing organization and writing style; do not rewrite unrelated sections.
4. Review the resulting diff and check that the README is internally consistent. Do not include generated output such as `test-results/`, build artifacts, secrets, or editor files.
5. Stage only the intended source and README changes. If there are pre-existing unrelated changes, leave them unstaged and mention them.
6. Commit the staged changes with a concise message such as `docs: refresh README and sync latest changes`.
7. Report the commit hash, the files committed, and any remaining unstaged changes.

Do not claim success if the README was not changed when repository changes require documentation updates, if validation fails, or if the commit fails. Ask for confirmation before committing if the target repository or intended file set is ambiguous.
