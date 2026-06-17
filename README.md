# Ali Hassan Ali — Flutter & Full Stack .NET Portfolio

A personal portfolio website showcasing mobile and web projects, experience, and technical skills. Built for a Flutter developer with Clean Architecture and BLoC experience, plus a Full Stack .NET background.

**Live site:** https://aliashiry.github.io/portfolio/  
**Repository:** https://github.com/aliashiry/portfolio

---

## Features

- Bilingual UI (Arabic / English) with an EN/AR toggle in the navbar
- Full RTL/LTR support with logical CSS properties
- Developer-focused layout with a code-editor aesthetic
- Detailed projects section with Google Play links and live demos
- Interactive experience and education timeline
- Fully responsive (mobile, tablet, desktop)
- No external frameworks — plain HTML, CSS, and JavaScript
- Ready to deploy on GitHub Pages

---

## Project Structure

```
portfolio/
├── index.html                  # Main page
├── css/
│   └── style.css               # Styles and layout
├── js/
│   ├── main.js                 # Navbar, scroll, animations
│   └── i18n.js                 # Arabic/English translations
├── assets/
│   ├── Ali_Hassan_Flutter_CV.pdf
│   ├── Ali_Hassan_FullStack_CV.pdf
│   └── img/
│       ├── google-play-badge.png
│       └── projects/           # SVG placeholders for some projects
├── images/                     # App and web project screenshots
└── README.md
```

---

## Run Locally

Open `index.html` directly in your browser, or use a simple local server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

Then open `http://localhost:8000`.

---

## Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select branch `main` and folder `/ (root)`.
4. Save and wait a minute or two.
5. Your site will be available at `https://<username>.github.io/<repo-name>/`.

Example for this repo:

```bash
git remote add origin https://github.com/aliashiry/portfolio.git
git push -u origin main
```

---

## Customization

### Personal info
Most content lives in `index.html`. Update email, LinkedIn, and GitHub links in the `#contact` section and header.

### Translations
Edit `js/i18n.js` to change Arabic or English copy. Keys follow a `section.element` pattern (e.g. `hero.title1`, `nav.about`).

### Project images
Screenshots are in `images/`. SVG placeholders are in `assets/img/projects/`. Replace or update the `src` paths in `index.html` as needed.

### Add a new project
Duplicate an `<article class="project-card">...</article>` block in `index.html` and update the content, image, and links.

### Colors and typography
Design tokens are defined as CSS variables at the top of `css/style.css` under `:root`.

---

## Visual Identity

| Element | Value |
|---|---|
| Background | `#0B1220` |
| Accent | `#5EEAD4` |
| Headings | Space Grotesk |
| Arabic text | IBM Plex Sans Arabic |
| Code | JetBrains Mono |

---

## License

This project is for personal portfolio use. Feel free to adapt it for your own needs.
