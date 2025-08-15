# CompanyExit Starter (Vite + React + Tailwind)

## Entwicklung
```bash
npm install
npm run dev
```
Öffne `http://localhost:5173`.

## Build
```bash
npm run build
npm run preview
```
Der Ordner `dist/` enthält die statischen Dateien für das Hosting.

## Deployment auf cPanel (public_html)
1. `npm run build`
2. Inhalt von `dist/` zippen und in `public_html` hochladen/entpacken.
3. Für SPA-Routen `.htaccess` anlegen:
```
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
