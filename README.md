# Markdown to HTML Converter

A simple app used to practice JavaScript skills. This project converts a subset of Markdown into HTML and displays both the raw HTML and a live rendered preview.

## Features

- Convert headings: `#`, `##`, `###` → `<h1>`, `<h2>`, `<h3>`
- Bold: `**text**` or `__text__` → `<strong>`
- Italic: `*text*` or `_text_` → `<em>`
- Images: `![alt-text](image-source)` → `<img alt="alt-text" src="image-source">`
- Links: `[link text](URL)` → `<a href="URL">link text</a>`
- Blockquotes: `> quote` → `<blockquote>quote</blockquote>`
- Live conversion using `convertMarkdown()` and the `input` event
- Raw HTML output (`#html-output`) and rendered preview (`#preview`)

## Usage

1. Open `index.html` in your browser (or run a local server, e.g., `python -m http.server`).
2. Type Markdown into the textarea labeled **Markdown Input** (`#markdown-input`).
3. The **Raw HTML Output** will show the generated HTML string, and the **HTML Preview** will render it.

## Project Structure

- `index.html` — Page layout and markup
- `styles.css` — Styling
- `script.js` — Markdown parsing logic (`convertMarkdown()`)

---
