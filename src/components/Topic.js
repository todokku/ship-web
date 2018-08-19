import { Badge } from '@hackclub/design-system'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'
import React from 'react'
import stringToColor from 'string-to-color'

const Base = Badge.withComponent(Link).extend.attrs({
    my: 1,
    mr: 2,
    p: 2,
    style: props => ({ backgroundColor: stringToColor(props.name) })
})`
    text-shadow: rgba(0, 0, 0, 0.376) 0px 1px 2px;
`

const Topic = ({ name, ...props}) => (
    <Base to={`/topics/${kebabCase(name)}`} name={name} children={name} {...props} />
)

export default Topic