module.exports = {
    siteMetadata: {
        siteUrl: 'https://ship.hackclub.com'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: {
                prefixes: ['/projects/*', '/topics/*']
            }
        },
        {
            resolve: 'gatsby-plugin-favicon',
            options: {
                logo: './static/favicon.png',
                injectHTML: true,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    twitter: false,
                    yandex: false,
                    windows: false
                }
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        'gatsby-plugin-remove-trailing-slashes',
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-styled-components'
    ]
}