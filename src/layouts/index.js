import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider, colors } from '@hackclub/design-system'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import { description, name, title, url } from 'data.json'

library.add(fab, fas) // Pre-register icons for easier reference

// Fix body width if scrollbar is present
injectGlobal`
    body {
        width: 100%;
    }
`

const Layout = ({ children }) => (
    <ThemeProvider webfonts>
        <Helmet
            defaultTitle={`${title} — ${name}`}
            titleTemplate={`%s — ${name}`}
            meta={[
                { charSet: 'utf-8' },
                { name: 'description', content: description },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'theme-color', content: colors.primary },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:description', content: description },
                { name: 'twitter:domain', content: url },
                { name: 'twitter:image:src', content: '' },
                { name: 'twitter:title', content: title },
                { property: 'og:description', content: description },
                { property: 'og:image', content: '' },
                { property: 'og:image:height', content: 512 },
                { property: 'og:image:width', content: 512 },
                { property: 'og:locale', content: 'en_US' },
                { property: 'og:site_name', content: name },
                { property: 'og:title', content: title },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: url }
            ]}
        />
        {children()}
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.func
}

export default Layout