# Medi-Lab Static Website

Hosting-ready static website for Medi-Lab Diagnostic Centre.

## Structure

- `index.html` - main homepage
- `assets/styles.css` - shared website design
- `assets/site.js` - shared contact details and test data
- `tests/blood/index.html` - blood test detail page
- `tests/liver/index.html` - liver function test detail page
- `tests/kidney/index.html` - kidney function test detail page
- `tests/urine/index.html` - urine test detail page
- `tests/lever/index.html` - redirect alias to the liver page

## Update Lab Details

Edit `assets/site.js` to change:

- Lab name
- Phone number
- Email
- Address
- Opening hours
- Home sample pickup text
- Test details and preparation notes

## Hosting

Upload the full folder to any static hosting platform. The homepage is `index.html`, and test pages are available under `/tests/blood/`, `/tests/liver/`, `/tests/kidney/`, and `/tests/urine/`.
