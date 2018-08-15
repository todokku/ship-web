import { Badge } from '@hackclub/design-system'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'
import React from 'react'
import stringToColor from 'string-to-color'

const Base = Badge.withComponent(Link).extend.attrs({
    to: props => `/topics/${kebabCase(props.name)}`,
    children: props => props.name,
    my: 1,
    mr: 2,
    p: 2,
    style: props => ({ backgroundColor: stringToColor(props.name) })
})`
    text-shadow: rgba(0, 0, 0, 0.376) 0px 1px 2px;
`

const Topic = ({ name, ...props}) => (
    <Base name={name} {...props} />
)

export default Topic