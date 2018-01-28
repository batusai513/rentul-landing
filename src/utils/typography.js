import Typography from "typography";

const typography = new Typography({
  baseFontSize: "15px",
  baseLineHeight: 1.2,
  headerWeight: "700",
  googleFonts: [
    {
      name: "Roboto Slab",
      styles: ["400", "400", "700"]
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
