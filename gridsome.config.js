module.exports = {
  siteName: 'lemkoland',
  siteDescription: '..',

  templates: {
    WordPressCategory: '/cat/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/play/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug', // adds a route for the "post_tag" post type (Optional)
    WordPressPage: '/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://lem5.sukabilgorajska.pl', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
