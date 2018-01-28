module.exports = {
  siteMetadata: {
    title: "Rentul Defense"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion"
  ]
};
