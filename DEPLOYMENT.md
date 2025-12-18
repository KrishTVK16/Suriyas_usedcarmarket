# GitHub Pages Deployment Guide

This document provides step-by-step instructions for deploying your Used Car Market React application to GitHub Pages.

## Prerequisites

- Git installed on your computer
- A GitHub account
- Your React app properly configured (already done!)

## Initial Setup

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `usedcarmarket`)
4. **Do NOT** initialize with README, .gitignore, or license (since you already have code)
5. Click "Create repository"

### 3. Connect Local Repository to GitHub

Replace `yourusername` and `repository-name` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/yourusername/repository-name.git
git branch -M main
git push -u origin main
```

### 4. Update Homepage URL (Important!)

Open `package.json` and update the `homepage` field with your actual GitHub Pages URL:

```json
"homepage": "https://yourusername.github.io/repository-name"
```

Then commit this change:

```bash
git add package.json
git commit -m "Update homepage URL"
git push
```

## Deployment Options

You have two deployment methods available:

### Option 1: Manual Deployment

Deploy manually using the npm script:

```bash
npm run deploy
```

This will:
1. Build your React app for production
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub Pages

### Option 2: Automatic Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys when you push to the `main` branch.

**Enable GitHub Pages:**

1. Go to your repository on GitHub
2. Click "Settings" → "Pages" (in the left sidebar)
3. Under "Source", select:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click "Save"

Now every time you push to the `main` branch, GitHub Actions will automatically build and deploy your app!

## Accessing Your Deployed Site

After deployment (either manual or automatic), your site will be available at:

```
https://yourusername.github.io/repository-name
```

**Note:** It may take a few minutes for the site to become available after the first deployment.

## Making Updates

### For Manual Deployment:

1. Make your code changes
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### For Automatic Deployment:

1. Make your code changes
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. GitHub Actions will automatically deploy your changes!

## Troubleshooting

### Page Shows 404 Error

- Ensure GitHub Pages is enabled in repository settings
- Verify the `gh-pages` branch exists
- Check that the `homepage` field in `package.json` matches your GitHub Pages URL
- Wait a few minutes - GitHub Pages can take time to propagate changes

### Routes Don't Work (Blank Page on Refresh)

- This should be fixed by using `HashRouter` instead of `BrowserRouter`
- URLs will have a `#` in them (e.g., `https://yourusername.github.io/repo#/about`)
- This is normal for GitHub Pages and ensures all routes work correctly

### Build Errors

- Run `npm run build` locally to test
- Check the console output for specific errors
- Ensure all dependencies are installed (`npm install`)

### GitHub Actions Failing

- Go to the "Actions" tab in your GitHub repository
- Click on the failed workflow to see error details
- Common issues:
  - Missing dependencies in `package.json`
  - Build errors (test locally with `npm run build`)
  - Incorrect Node.js version (workflow uses Node 18)

## Local Testing

Test your production build locally before deploying:

```bash
# Build the app
npm run build

# Serve the build folder (install serve if needed)
npx serve -s build
```

Then open the URL shown in the terminal (usually `http://localhost:3000`) to test your production build.

## Important Notes

- **Hash Routing**: This app uses `HashRouter`, so URLs will include a `#` symbol. This is required for GitHub Pages.
- **Custom Domain**: If you want to use a custom domain, update the `cname` field in `.github/workflows/deploy.yml`
- **Environment Variables**: If you need environment variables, add them to your repository secrets (Settings → Secrets and variables → Actions)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
