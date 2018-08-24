import { Badge, cx } from '@hackclub/design-system'
import Link from 'gatsby-link'
import React from 'react'

const Base = Badge.withComponent(Link).extend.attrs({
    my: 1,
    mr: 2,
    p: 2
})`
    text-shadow: rgba(0, 0, 0, 0.376) 0px 1px 2px;
`

const Topic = ({ name, slug, color = 'muted', ...props}) => (
    <Base to={`/topics/${slug}`} children={name} style={{ background: cx(color) }} {...props} />
)

export default Topic