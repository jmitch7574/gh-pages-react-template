# GitHub Pages React Template

A modern React template pre-configured for easy deployment to GitHub Pages, using Vite, React Router, and GitHub Actions.

## ✨ Features

- React 19 + Vite for fast development
- Automatic deployment to GitHub Pages via GitHub Actions
- HashRouter for GitHub Pages compatibility
- ESLint configuration included
- Simple component structure ready for expansion

## 🚀 Quick Start

### 1. Use this template

Click the "Use this template" button to create a new repository based on this template.

### 2. Clone your repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Update configuration

**Important:** Update the repository name in `vite.config.js`:

```js
const REPO_NAME = 'your-repo-name'; // Change this to your repository name
```

### 5. Enable GitHub Actions

In your repository settings:
1. Go to `Settings > Actions > General`
2. Under "Workflow permissions", select "Read and write permissions"
3. Save your changes

### 6. Development

Run the development server:

```bash
npm run dev
```

### 7. Deploy

Just push to the `main` branch, and GitHub Actions will automatically deploy your site to GitHub Pages.

Once deployed your website will be available at `https://[your-github-username].github.io/[your-repo-name]/#/` (can be found in `Settings > Pages`)

## 📝 Project Structure

```
/
├── .github/workflows/ - GitHub Actions configuration
├── src/
│   ├── components/    - Reusable UI components
│   ├── pages/         - Page components
│   ├── App.jsx        - Main app component
│   └── main.jsx       - Application entry point
├── public/            - Static assets
└── vite.config.js     - Vite configuration
```

## 💪 Benefits of GitHub Pages Hosting

- **Completely free** - No hosting costs for public repositories
- **Seamless GitHub integration** - Deploy directly from your repository
- **Automated deployment** - Set up with GitHub Actions
- **Reliable CDN** - Content delivered by GitHub's fast CDN
- **Custom domain support** - Use your own domain if needed

## ⚠️ Limitations to Consider

- **Static sites only** - No server-side rendering or backend functionality
- **Build size restrictions** - GitHub Pages has a recommended limit of 1GB per repository
- **Bandwidth limitations** - Not suitable for high-traffic applications (GitHub may throttle)
- **No direct server access** - Cannot run server-side processes or database connections
- **Single site per repository** - Each repository can host only one website

## 📄 License

MIT