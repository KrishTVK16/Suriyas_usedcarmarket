# UsedCar Market - Premium Used Car Marketplace

A modern React-based web application for buying and selling used cars with features like car browsing, EMI calculator, inspection services, and user dashboards.

## 🚀 Features

- Browse and search used cars
- Detailed car listings with specifications
- EMI Calculator
- Car inspection services
- User and dealer dashboards
- Responsive design
- Dark theme support

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v14 or higher) installed
- npm or yarn package manager
- Git installed
- A GitHub account (for hosting)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/usedcarmarket.git
cd usedcarmarket
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment to GitHub Pages

### Step 1: Update Homepage in package.json

Before deploying, update the `homepage` field in `package.json` with your GitHub repository URL:

```json
"homepage": "https://YOUR_USERNAME.github.io/usedcarmarket"
```

Replace `YOUR_USERNAME` with your GitHub username and `usedcarmarket` with your repository name.

### Step 2: Install gh-pages Package

Install the `gh-pages` package as a dev dependency:

```bash
npm install --save-dev gh-pages
```

### Step 3: Initialize Git Repository

If you haven't already initialized git:

```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 4: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `usedcarmarket` (or your preferred name)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### Step 5: Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/usedcarmarket.git
git branch -M main
git push -u origin main
```

### Step 6: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your React app
- Deploy it to the `gh-pages` branch
- Make your site available at `https://YOUR_USERNAME.github.io/usedcarmarket`

### Step 7: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select `gh-pages` branch
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/usedcarmarket`

## 🔗 Universal Link / Custom Domain (Optional)

To use a custom domain or create a universal link:

### Option 1: Custom Domain

1. Purchase a domain from a registrar (e.g., Namecheap, GoDaddy)
2. In your domain's DNS settings, add a CNAME record:
   - **Type**: CNAME
   - **Name**: @ (or www)
   - **Value**: YOUR_USERNAME.github.io
3. In your GitHub repository:
   - Go to **Settings** > **Pages**
   - Under **Custom domain**, enter your domain
   - Check **Enforce HTTPS**

### Option 2: Use GitHub Pages URL

Your GitHub Pages URL (`https://YOUR_USERNAME.github.io/usedcarmarket`) is already a universal link that works from anywhere.

## 📝 Important Notes

### Routing Configuration

This project uses **HashRouter** instead of BrowserRouter to ensure compatibility with GitHub Pages. URLs will look like:
- `https://YOUR_USERNAME.github.io/usedcarmarket/#/browse-cars`
- `https://YOUR_USERNAME.github.io/usedcarmarket/#/car-details/1`

### Environment Variables

If you need to add environment variables:
1. Create a `.env` file in the root directory
2. Add your variables (e.g., `REACT_APP_API_KEY=your_key`)
3. Access them in code as `process.env.REACT_APP_API_KEY`
4. **Never commit `.env` files** - they're already in `.gitignore`

### Updating the Site

After making changes:
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
2. Deploy the updated version:
   ```bash
   npm run deploy
   ```

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📁 Project Structure

```
usedcarmarket/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── contexts/
│   ├── styles/
│   └── utils/
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

Your Name

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the project setup
- All contributors and users

---

**Note**: Remember to replace `YOUR_USERNAME` with your actual GitHub username throughout this README and in `package.json` before deploying.
