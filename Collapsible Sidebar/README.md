## Collapsible Sidebar

This project provides a responsive collapsible sidebar layout implemented with **HTML**, **CSS**, and **vanilla JavaScript**.  
On desktop viewports, the sidebar can be collapsed to a compact icon-only rail; on mobile viewports, it behaves as a slide‑in drawer with a dimmed overlay.

### Features

- **Responsive layout**: Adapts to desktop and mobile screens using CSS media queries.
- **Desktop sidebar collapse**: A dedicated control in the sidebar footer toggles between expanded and collapsed widths.
- **Mobile drawer behavior**: On small screens, a hamburger button opens the sidebar as an overlay drawer.
- **Accessibility-conscious controls**: Makes use of `aria-expanded`, `aria-label`, and focusable buttons to improve accessibility.
- **Refined styling**: Dark theme with accent color, smooth transitions, and Google Fonts.

### Getting Started

1. **Obtain the source code** by cloning or downloading this directory.
2. Open `index.html` in a web browser. For example, on Windows:

```bash
start index.html
```

No build pipeline or package installation is required; the application runs directly in the browser.

### Usage

- **Desktop**
  - Use the **Collapse** button in the sidebar footer to toggle between expanded and collapsed states.
- **Mobile (≤ 768px)**
  - Use the **menu (hamburger) button** in the top-left corner to open the sidebar as a drawer.
  - Click or tap outside the sidebar (on the overlay) or press the menu button again to close it.

### Project Structure

- `index.html` – Defines the markup for the layout and sidebar.
- `styles.css` – Provides styling, layout rules, and responsive behavior for desktop and mobile.
- `script.js` – Implements the logic for collapsing the sidebar on desktop and controlling the drawer on mobile.

### Customization

- **Navigation items**: Update the links within the `<nav class="nav">` block in `index.html`.
- **Colors and dimensions**: Modify the CSS custom properties in `styles.css` under the `:root` selector (for example, `--sidebar-width-open`, `--accent`, or background colors).
- **Responsive breakpoint**: Adjust the `--breakpoint-mobile` value in `styles.css` and the `MOBILE_BREAKPOINT` constant in `script.js` to change the viewport width at which mobile behavior is applied.

