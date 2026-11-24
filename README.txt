YPO MENA GLC 2027 — COMPLETE REACT PROJECT FOR VERCEL

WHY A LONE JSX FILE DOES NOT DEPLOY AS A WEBSITE
App.jsx contains the dashboard component. A React website also needs an HTML
entry page, a script that displays the component, package dependencies and a
build command. This package supplies those files. A Vercel 404 alone cannot
confirm which files or settings were missing in the previous deployment.

REPLACE THE INCOMPLETE PROJECT
1. Extract this ZIP on your computer.
2. Open the GitHub repository linked to your existing Vercel project.
3. Upload ALL the extracted contents into the top level of that repository.
   package.json, index.html and vercel.json must be at the top level,
   alongside the src folder. Do not upload only App.jsx or the unopened ZIP.
4. Save/commit the changes to main.
5. In Vercel, check Project Settings -> Build and Deployment:
   - Root Directory: repository root (leave blank, or use ./ if required).
   - Framework Preset: Vite.
   - Install Command: npm install.
   - Build Command: npm run build.
   - Output Directory: dist.
   - Node.js: 22.x.
   The included vercel.json already specifies framework and build settings.
   Remove conflicting overrides left over from the previous deployment.
6. Allow the new deployment triggered by your commit to finish, then Visit.
   If no deployment starts, use Redeploy on the latest deployment.

FILES
index.html       The page Vite builds and Vercel serves at the root URL.
src/main.jsx     Displays the React dashboard inside that page.
src/App.jsx      Complete dashboard, source data, styles and import logic.
package.json     React dependencies and the production build command.
vercel.json      Vercel framework, build output and page-routing settings.

FUTURE CODE UPDATES
Replace src/App.jsx when you receive a revised dashboard component.
Keep the other project files. Use the dashboard's Import weekly report
button for data updates; a weekly import does not require redeployment.

DATA AND VALIDATION
Includes the 55 Bangkok records as of 23 November 2026, with the user's
confirmations: Isabela Ududec is registered UAE MEO; Nuha Abujaber is
registered Jordan MO. Coverage is 44/136 applicable roles (32.4%).
Emails are excluded. Data and imported weekly history are stored locally
in the viewer's browser, not in a shared online database. Export a history
backup to transfer weekly updates to another browser or colleague.

VALIDATION LIMIT
JSX compilation, component behavior, source counts and the project entry
structure were checked locally. The full Vite dependency installation and
production build could not run in this session because dependency-download
access was not available. Vercel must perform that build on redeployment.
The live project's settings and deployment logs were not accessible here.

OPTIONAL LOCAL DEVELOPMENT (requires Node.js 22.12 or newer in the 22.x line)
npm install
npm run dev

PRODUCTION BUILD
npm run build
npm run preview

Vercel reference: https://vercel.com/docs/frameworks/frontend/vite
