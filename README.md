# 📄 NSTU Assignment Cover Page Generator

A modern, fully client-side web app to generate professional **A4 PDF cover pages** matching the NSTU (Noakhali Science & Technology University) standard format.

🔗 **[Live Demo](https://your-username.github.io/nstu-cover/)**

---

## ✨ Features

- 🖊️ **Full form** — University, assignment, student & instructor details
- 🏫 **NSTU logo pre-loaded** — No need to upload; replace optionally
- 👁️ **Live preview** — Updates in real-time as you type
- 🔍 **Full-resolution preview modal** — See the exact A4 page before downloading
- 📥 **One-click PDF download** — A4-sized, print-ready
- 📱 **Responsive** — Works on desktop & mobile
- ⚡ **Zero backend** — Pure HTML + CSS + JS + jsPDF

---

## 📁 File Structure

```
nstu-cover/
├── index.html   ← Page structure & markup
├── style.css    ← All styling & layout
├── script.js    ← PDF drawing, preview & download logic
└── README.md    ← This file
```

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Create repo
1. Go to [github.com](https://github.com) → **New repository**
2. Name: `nstu-cover` (or anything), set **Public**
3. Click **Create repository**

### Step 2 — Upload all files
Upload all 3 files (`index.html`, `style.css`, `script.js`) into the repo root.

```bash
# Or via Git CLI:
git clone https://github.com/YOUR_USERNAME/nstu-cover.git
cd nstu-cover
# copy the 3 files here
git add .
git commit -m "Initial commit: NSTU cover generator"
git push
```

### Step 3 — Enable GitHub Pages
1. Repo → **Settings** → **Pages**
2. Branch: `main` → `/ (root)` → **Save**
3. Visit: `https://YOUR_USERNAME.github.io/nstu-cover/`

---

## 🎨 Customization

| What | Where in `script.js` |
|------|----------------------|
| Default field values | `getData()` or input `value=""` attributes in `index.html` |
| Real NSTU PNG logo | Replace `NSTU_LOGO_SVG` with a base64 PNG string |
| Cover layout | `drawCover()` function |
| Colors / fonts | `:root` variables in `style.css` |

### Using a real logo image
Convert your PNG to base64:
```bash
base64 -w 0 nstu_logo.png
```
Then in `script.js`, replace:
```js
let logoDataURL = svgToDataURL(NSTU_LOGO_SVG);
```
with:
```js
let logoDataURL = 'data:image/png;base64,YOUR_BASE64_STRING_HERE';
```

---

## 📦 Dependencies (CDN)
- [jsPDF 2.5.1](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)
- [Google Fonts — Lora & Outfit](https://fonts.google.com)

---

## 🙋 FAQ

**Q: Is my data stored?**  
No. Everything runs in the browser. Nothing is sent to any server.

**Q: Can I use this for other universities?**  
Yes — change the default values in `index.html` and the colors in `style.css`.

---

## 📄 License
MIT — free to use and modify.
