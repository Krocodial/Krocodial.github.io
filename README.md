# Kraak Consulting Website

This is the source code for the Kraak Consulting website, a modern, responsive one-page site built with Pug, SCSS, and Bootstrap 5. It features:

- Custom branding and design
- Service and about sections
- Contact form (FormSubmit)
- Live cybersecurity news feed (RSS)
- Social links (LinkedIn, GitHub)
- Mobile-friendly and accessible layout

## Development

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server with live reload:
   ```sh
   npm start
   ```
   This will build the site and open a local preview. Changes to Pug, SCSS, JS, or assets will auto-reload.

### Build for Production
To generate the static site in the `dist/` folder:
```sh
npm run build
```

## Project Structure
- `src/pug/` – Pug templates (main: `index.pug`)
- `src/scss/` – SCSS styles (modular, section-based)
- `src/js/` – JavaScript (site scripts, cyber news feed)
- `src/assets/` – Images and icons
- `dist/` – Compiled static site (output)
- `scripts/` – Build and watch scripts

## Customization
- Update content in `src/pug/index.pug` for text, sections, and links.
- Change images in `src/assets/img/`.
- Adjust styles in `src/scss/sections/`.
- Edit the cyber news feed logic in `src/js/cyber-feed.js`.

## Deployment
The site is ready for static hosting (GitHub Pages, Netlify, Vercel, etc.).

## License
MIT License. See [LICENSE](LICENSE) for details.
