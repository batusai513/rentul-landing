import Typography from "typography";
import facepaint from 'facepaint';

const typography = new Typography({
  baseFontSize: "15px",
  baseLineHeight: 1.2,
  headerWeight: "700",
  googleFonts: [
    {
      name: "Roboto Slab",
      styles: ["300", "400", "700"]
    },
    {
      name: "Open Sans",
      styles: ["400", "700"]
    }
  ],
  headerFontFamily: [
    "Roboto Slab",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Roboto Slab",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ]
});

export default typography;

export function rem(size, base = 15) {
  return `${(size / base).toFixed(3)}rem`;
}

export const mq = facepaint([
  `@media screen and (min-width: ${rem(600)})`,
  `@media screen and (min-width: ${rem(780)})`,
  `@media screen and (min-width: ${rem(1024)})`
]);