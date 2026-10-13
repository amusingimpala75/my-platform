# Individual Production Platform: Frontend Deployment and Personalization

The goal of this assignment is to move your personal platform from a local React application to a real production deployment with a repeatable release process.

By the end of the assignment, you should have:

- a React + TypeScript frontend built with Vite
- frontend setup and build instructions documented
- your GitHub repository connected to Cloudflare Pages
- preview deployments for feature branches / pull requests
- `main` serving as the production branch
- your custom domain connected to the deployed frontend
- a small amount of real personal content on the site
- experience verifying a change before merging it to production
- your Engineering Notebook updated with the new frontend capability

---

## 1. Create the React + TypeScript Frontend

Create the frontend using React, TypeScript, and Vite inside the `frontend/` directory.

Your project should include the normal Vite-generated files, including:

```text
package.json
package-lock.json
src/
public/
```

Install dependencies if needed:

```bash
npm install
```

Run the application locally:

```bash
npm run dev
```

Verify linting:

```bash
npm run lint
```

Verify that the production build succeeds:

```bash
npm run build
```

The production build should create:

```text
frontend/dist/
```

Do not continue with deployment until the frontend builds successfully.

---

## 2. Document the Frontend

Add or update `frontend/README.md` with instructions for working with the frontend.

Suggested content:

````markdown
# Frontend

This directory contains the React and TypeScript frontend for the production platform.

The frontend uses Vite for local development and production builds. Production builds create static files in `dist/` for deployment.

## Requirements

* Node.js
* npm

## Install Dependencies

From the `frontend/` directory:

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Vite starts a local development server and prints the local URL in the terminal.

## Lint

```bash
npm run lint
```

## Build for Production

```bash
npm run build
```

The production build is created in `frontend/dist/`.
````

---

## 3. Update the Engineering Notebook

Add the following capability to `docs/engineering-notebook.md`.

Adapt the evidence to match your actual project.

````markdown
### React and TypeScript Frontend Foundation

The public frontend uses React and TypeScript with Vite to provide a maintainable, type-checked foundation for the production platform.

**Why it matters:**

React provides a component-based model for building the interface, while TypeScript catches many errors before runtime. Vite provides a repeatable path from source code to deployable static files that can be verified through CI and hosted through a production platform.

**Tradeoffs / limitations:**

React and TypeScript introduce build tooling, dependency management, and additional project complexity compared with simple HTML and JavaScript. These costs are justified by stronger type checking, reusable components, and a scalable structure for continued development.

**Evidence / verification:**

* Frontend source: `frontend/`
* Local development: `npm run dev`
* Lint: `npm run lint`
* Production build: `npm run build`
* Production output: `frontend/dist/`
* Frontend foundation pull request: `#___`
````

Replace `#___` with your actual pull request number after the PR is created.

---

## 4. Create the Frontend Foundation Pull Request

Commit the frontend setup, documentation, and Engineering Notebook update on the appropriate feature branch.

Create a pull request.

Suggested PR description:

````markdown
## Summary

Adds the initial React + TypeScript frontend using Vite.

Also adds:
* `package.json` and `package-lock.json`
* Frontend development/build documentation
* Engineering notebook entry

## Verification

```bash
npm run dev
npm run lint
npm run build
```

Confirmed the production build is generated in `frontend/dist/`.

## Deployment / Rollback

Not applicable — production deployment is not configured yet.
````

Review the PR and merge it into `main`.

---

## 5. Connect the Frontend to Cloudflare Pages

Create or configure a Cloudflare Pages project connected to your GitHub repository.

Use:

- Production branch: `main`
- Root directory: `frontend`
- Build command: `npm run build`
- Build output directory: `dist`

Cloudflare should build the frontend directly from the GitHub repository.

After the first successful deployment, Cloudflare will provide a URL similar to:

```text
https://your-project-name.pages.dev
```

Open the URL and verify that your React application appears.


---

## 6. Connect Your Custom Domain

Connect the custom domain or subdomain you intend to use for your portfolio.

Recommended:

```text
portfolio.yourdomain.dev
```

Other valid choices include:

```text
www.yourdomain.dev
yourdomain.dev
```

After Cloudflare finishes configuring the domain, verify that the site loads from the custom domain.

Your custom domain is the normal production URL for the application.

Keep track of the Cloudflare-provided `pages.dev` URL as well. It provides a direct way to reach the Cloudflare deployment and can be useful later when troubleshooting custom-domain or DNS problems.

---

## 7. Observe the Preview Deployment Workflow

Create a small visible change on a feature branch.

For example:

```bash
git switch -c feature/deployment-test
```

Make a small change, commit it, push the branch, and create a pull request.  You do not need to follow style guide for PR text for this one "test deployment, small cosmetic change only" is sufficient.

Cloudflare should automatically create a preview deployment.

In the pull request:

- find the Cloudflare preview link
- open the preview deployment
- verify that your change appears
- verify that the rest of the application still works

If you push another commit to the same branch, the open pull request will include that commit and Cloudflare will create a new preview deployment.

Do not merge a production-bound change without looking at the current preview first.

---

## 8. Merge and Verify Production

When the preview looks correct, merge the pull request into `main`.

Because `main` is the production branch, Cloudflare should automatically build and deploy the new version to production.

After deployment:

- open your production custom domain
- verify that the expected change is present
- verify that the application still works

The workflow should now be:

```text
feature branch
      ↓
pull request
      ↓
preview deployment
      ↓
verify
      ↓
merge to main
      ↓
production deployment
```

---

## 9. Create a Branch for Your Personal Introduction

Before changing the site, create a new feature branch:

```bash
git switch main
git pull
git switch -c feature/personal-introduction
```

All personal-content work for this assignment should happen on this branch.

---

## 10. Add a Small Amount of Personal Content

Your site should now begin looking like your site rather than the original React starter application.

Do not build your entire portfolio yet.

Create a simple landing-page introduction that includes approximately:

- your name
- your major or professional area of interest
- a short sentence or two about yourself
- one visual element, such as:
  - a photo
  - an avatar
  - an icon
  - another simple visual that fits the page

You may also add a small amount of styling so the page looks intentional.

Possible additions include:

- a simple header
- readable spacing and typography
- a card or introductory section
- a background or accent style
- a simple responsive layout

Do not spend substantial time polishing the design.

### Styling

You may use:

- normal CSS
- CSS modules
- an existing styling approach already in your project
- Tailwind CSS, if you want to experiment with it

Tailwind is optional.

Do not add it simply because it exists.

For this assignment, you do not need to be able to explain every CSS property generated or suggested by AI. You may treat AI as a coworker helping with visual styling.

---

## 11. AI and Code Ownership

AI may help you create the initial React/TypeScript code, but you are responsible for understanding the application code that you submit.

There is an important distinction in this assignment.

### React / TypeScript

You must understand the React and TypeScript code in your project.

If AI generates or substantially changes this code, ask it to teach you what it created.

Before merging, you should be able to explain:

- what components you changed
- what data or content the component contains
- what the JSX produces
- any TypeScript syntax that is new to you
- how you would make a small modification yourself

A useful prompt is:

> I am a computer science student learning React and TypeScript. Help me implement a small personal landing page, but do not treat me as someone who should blindly accept generated code. Explain any React or TypeScript constructs that may be unfamiliar, and after we finish, ask me a few questions to verify that I understand the code well enough to maintain and modify it myself. You may help freely with CSS and visual styling.  I do not need to understand styling code changes.

If you cannot explain the React/TypeScript code, you do not yet own the change.

### CSS / Visual Styling

AI may take a much larger role in visual styling.

You should still recognize which files control the appearance of your site, but you are not expected to explain every generated CSS rule for this assignment.

---

## 12. Create the Personal Introduction Pull Request

Commit and push your work:

```bash
git status
git add .
git commit -m "Add personal landing page introduction"
git push -u origin feature/personal-introduction
```

Create a pull request.

Suggested PR description:

```markdown
## Summary

Adds initial personal content and styling to the production landing page.

The page now includes:
* Name and professional/academic introduction
* Brief personal description
* A visual element
* Initial layout and styling

## Verification

* Ran the application locally with `npm run dev`
* Ran `npm run lint`
* Ran `npm run build`
* Verified the production build completes successfully
* Opened the Cloudflare preview deployment
* Verified the expected content appears
* Verified the existing application still works

## Deployment Notes

Merging this PR to `main` will trigger the Cloudflare Pages production deployment.

No new environment variables or infrastructure changes are required.

## Risks / Rollback

Risk is limited to frontend content and styling.

If the change causes a problem, the previous version can be restored through Git or the Cloudflare deployment history.
```

Before merging:

- review the PR diff
- open the Cloudflare preview
- verify that the expected content appears
- check that the application still works
- make sure you understand the React/TypeScript code you are submitting

Then merge the PR.

---

## 13. Verify Production

After the PR is merged and Cloudflare finishes deploying:

- open your custom production domain
- verify that the personal introduction appears
- verify that the application still works

Do not stop at a successful merge or a green deployment indicator.

Verify what the user actually receives.

---

## Completion Check

Before considering the assignment complete, verify:

- [x] React + TypeScript frontend exists in `frontend/`
- [x] `frontend/README.md` documents local development, linting, and production builds
- [x] Engineering Notebook contains the React + TypeScript frontend entry
- [x] Frontend foundation PR was created and merged
- [x] `npm run lint` succeeds
- [x] `npm run build` succeeds
- [x] Cloudflare Pages is connected to the GitHub repository
- [x] `trunk` is the production branch
- [x] Cloudflare Pages deployment is working
- [x] Custom production domain is working
- [x] A pull request produced a usable preview deployment
- [x] Preview deployment was checked before merging
- [ ] Personal introduction was developed on its own feature branch
- [ ] Personal introduction PR was reviewed through its preview deployment
- [ ] The merged change appeared in production
- [ ] You understand the React/TypeScript code you submitted
