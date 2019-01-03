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

const Topic = ({ data, ...props}) => (
    <Base to={`/topics/${data.slug}`} children={data.name} style={{ background: cx(data.color) }} {...props} />
)

export default Topic