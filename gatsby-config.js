module.exports = {
  siteMetadata: {
    title: "Rentul Defense | Agencia de Cobranzas",
    image: "https://s3-sa-east-1.amazonaws.com/rentul-defense/emails/logo.jpeg",
    description:
      "Jurídico - Prejurídico - Persuasivo | Nos encargamos de su cartera.",
    keywords: "Cobranza, agencia, abogados",
    more: "hola",
    openGraph: {
        locale: "es_ES",
        title: "Rentul Defense | Agencia de Cobranzas",
        description:
          "Jurídico - Prejurídico - Persuasivo | Nos encargamos de su cartera.",
        url: "www.rentuldefense.com",
        image:
          "https://s3-sa-east-1.amazonaws.com/rentul-defense/emails/logo.jpeg"
      }
  },
  plugins: [
    "gatsby-plugin-react-next",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    "gatsby-plugin-react-helmet"
  ]
};
