# savour-bistros-frontend

# Savour Bistros
A modern, elegant, and responsive restaurant website built with vanilla HTML, CSS, and JavaScript. Initially developed as a single page project, it has now been restructured into a multi page layout with enhanced navigation.
## Live Preview
Open `index.html` in any modern web browser. No build step or server is required.
## About This Project
**Savour Bistros** is a conceptual fine-dining restaurant website created as a portfolio piece to demonstrate front-end craftsmanship — clean semantic markup, thoughtful design tokens, smooth scroll-reveal animations, and a fully responsive layout.
The concept imagines an intimate bistro established in 2012, blending classical technique with modern restraint. The design language draws from warm, earthy tones (copper, cream, charcoal) paired with refined typography to evoke the feeling of a candlelit evening: timeless, welcoming, and quietly luxurious.
### Design Decisions
- **Typography**: Playfair Display (serif) for headings brings editorial elegance; Poppins (sans-serif) for body text ensures readability and a modern finish.
- **Color Palette**: Warm copper (`#b6713a`) as the primary accent against a soft cream background (`#faf7f2`) creates an inviting, premium atmosphere without the coldness of typical corporate palettes.
- **Spacing & Rhythm**: Generous vertical padding (`6rem` mobile, `8rem` desktop) between sections gives each part of the story room to breathe.
- **Animations**: A slow zoom on the hero background, scroll-triggered fade-up reveals, and hover lift effects on cards add polish without distracting from the content.
- **Mobile-First**: The navigation collapses into a hamburger menu, grids stack vertically, and typography scales fluidly using `clamp()`.
## Why Remote Images (Unsplash) Instead of Local Assets
Although local image files were generated and placed in an `assets/` folder during early development, the final build uses **remote Unsplash URLs** for the following reasons:
1. **Zero Setup for Viewers** — Anyone can open `index.html` directly in a browser and see the site immediately. There are no broken image paths to worry about when moving files between folders or devices.
2. **File Size & Portability** — The zip/download package stays lightweight. High-resolution photography can add several megabytes; hot-linking to optimized, CDN-hosted images keeps the codebase small and fast to share.
3. **Consistent Quality** — Unsplash serves responsive, professionally photographed images with automatic format and compression optimization. This guarantees crisp visuals on retina and standard displays alike without manual image processing.
4. **No Asset Pipeline Needed** — Because this is a vanilla HTML/CSS/JS project (not a bundled React/Vite app), there is no build step to copy, hash, or optimize local assets. Remote URLs remove that complexity entirely.
The local `assets/` folder remains part of the repository history as a reference and fallback, but the live site relies on remote sources for the best out of the box experience.
## Project Structure
```
savour-bistros/
├── index.html        # Landing page with top nav (logo + Reserve button)
├── about.html        # About page
├── menu.html         # Menu page
├── gallery.html      # Gallery page
├── contact.html      # Contact page
├── styles.css        # Complete design system, layout, and responsive queries
├── script.js         # Side nav toggle, scroll reveals, form handler
└── README.md         # This file

```
## Browser Support
- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari & Chrome (iOS / Android)
## License
© 2026 Savour Bistros. All rights reserved. Concept and design for demonstration purposes.
