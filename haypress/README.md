# Haypress

A dependency-free landing page for Haypress, which connects company data to existing AI tools such as ChatGPT and Claude. Imported from `haypress-vercel-ready.zip` with its original design and interactive demo preserved.

## Local development

From the repository root:

```sh
python3 -m http.server 3000 --directory haypress
```

Open http://localhost:3000. Serve this directory as the site root so the absolute asset paths resolve correctly. No package installation or build step is required.

## Demo scope

The weekly priorities, customer context, and revenue analysis scenarios contain fictional cross-source insights. Source expansion, example drafts, clipboard copying, and the signup preview all run in the browser. No live company data is connected. Email addresses are not submitted, stored, or added to a waitlist.

## Version control and deployment

This directory uses the existing `dtemple/dtempleme` Git repository. Keep Haypress changes inside `haypress/` and stage only those files.

The separate Vercel project is named `haypress`, with:

- Git repository: `dtemple/dtempleme`
- Root directory: `haypress`
- Production branch: `main`
- Framework preset: Other
- No build command or dependency installation

Push commits to `main` for automatic production deployments; other branches receive Vercel previews. The existing workspace projects retain their own configuration.

For a manual deployment, explicitly select the project from the repository root:

```sh
VERCEL_PROJECT_ID=prj_12A42WJc5PKrMaHbAgUru36VSumQ VERCEL_ORG_ID=team_WGUfcx1lrKtFkPg6rrZGVU3E vercel --prod
```

Do not run an unqualified deployment from the repository root, which already has a different Vercel project mapping. `.vercelignore` limits uploaded Haypress files to the page assets and Vercel configuration.
