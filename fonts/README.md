# Fonts

This site uses **Space Grotesk** (weights 300, 400, 500, 600, 700).

## How to add the font files

1. Go to https://fonts.google.com/specimen/Space+Grotesk
2. Click **Download family**
3. Unzip the download
4. Convert the `.ttf` files to `.woff2` using https://cloudconvert.com/ttf-to-woff2
5. Place the `.woff2` files in this `/fonts` folder
6. The `space-grotesk.css` file below will reference them automatically

## space-grotesk.css

Create a file called `space-grotesk.css` in this folder with the following content:

```css
@font-face {
  font-family: 'Space Grotesk';
  src: url('SpaceGrotesk-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Space Grotesk';
  src: url('SpaceGrotesk-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Space Grotesk';
  src: url('SpaceGrotesk-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Space Grotesk';
  src: url('SpaceGrotesk-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Space Grotesk';
  src: url('SpaceGrotesk-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

## Alternative (simpler)

If you don't want to self-host the font, you can skip this folder entirely.
Just edit `css/styles.css` line 1 and change:

```css
@import url('../fonts/space-grotesk.css');
```

back to:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

This loads the font from Google's servers — easier but requires internet and is slightly slower.
