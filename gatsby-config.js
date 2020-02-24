module.exports = {
  siteMetadata: {
    title: `Soccer Ethiopia Clone`,
    description: `A clone of the famous ethiopian news source for soccer, soccerethiopia made with GatsbyJs.`,
    author: `@bytewar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-soccerethiopia-clone`,
        short_name: `soccerethiopia`,
        start_url: `/`,
        background_color: `#092b00`,
        theme_color: `#092b00`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
