# DSA Docs

Interactive Data Structures & Algorithms documentation with 20 customizable themes.

## Features

- 📚 **Comprehensive Curriculum**: 13 topics covering foundations, data structures, and algorithms
- 🎨 **20 Themes**: From deep space to neon synth, customize your learning environment
- 🎯 **Code First**: See complete implementations before explanations
- 🎮 **Interactive**: Live playgrounds and visual diagrams
- 📱 **Responsive**: Works on all screen sizes
- ♿ **Accessible**: WCAG AA compliant contrast ratios
- ⚡ **Fast**: Optimized build with Vite
- 🚀 **Vercel Ready**: One-click deployment

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Type Checking

```bash
npm run typecheck
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Option 3: Git Integration

1. Connect your GitHub/GitLab/Bitbucket account to Vercel
2. Every push to main will automatically deploy
3. Pull requests get preview deployments

## Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── CodeBlock.tsx
│   │   ├── Placeholder.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeSwitcher.tsx
│   ├── config/
│   │   └── themes.ts     # Theme definitions
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── pages/            # Topic pages
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vercel.json           # Vercel configuration
├── vite.config.js
├── tsconfig.json
└── package.json
```

## Themes

The app includes 20 themes across 6 categories:

- **Deep Space** (5): Nebula Eclipse, Starlight Obsidian, Cosmic Dust, Supernova Blue, Orion Abyss
- **Ice & Frost** (2): Glacier Frost, Winter Quartz
- **Metal & Tech** (3): Cyber Slate, Titanium Echo, Silicon Steel
- **Neon & Synth** (4): Plasma Magenta, Synthwave Grid, Laser Violet, Glitch Emerald
- **Terminal & Matrix** (1): Matrix Terminal
- **Fire & Earth** (5): Magma Ash, Crimson Eclipse, Desert Mirage, Rust Horizon, Charcoal Ember

Theme selection is automatically saved to localStorage.

## Curriculum

### Foundations
- Memory & References
- Complexity Analysis
- Recursion

### Data Structures
- Arrays & Strings
- Linked Lists
- Stacks & Queues
- Hash Tables
- Trees & BSTs
- Graphs

### Algorithms
- Sorting
- Searching
- Dynamic Programming

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Prism React Renderer** - Syntax highlighting
- **Lucide React** - Icons

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## License

MIT
