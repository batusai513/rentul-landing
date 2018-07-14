module.exports = {
  siteMetadata: {
    title: 'Rentul Defense | Agencia de Cobranzas',
    image: 'https://s3-sa-east-1.amazonaws.com/rentul-defense/emails/logo.jpeg',
    description:
      'Controle todas las etapas del cobro de cartera.',
    keywords: 'Cobranza, agencia, abogados, cobro jurídico, cobro prejurídico, recuperar cartera, cartera',
    more: 'hola',
    openGraph: {
      locale: 'es_ES',
      title: 'Rentul Defense | Agencia de Cobranzas',
      description:
        'Controle todas las etapas del cobro de cartera.',
      url: 'www.rentuldefense.com',
      image:
        'https://s3-sa-east-1.amazonaws.com/rentul-defense/emails/logo.jpeg',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
};
