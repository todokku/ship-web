import { Box, Card, Heading, Image, cx } from '@hackclub/design-system'
import React from 'react'

const Base = Box.extend.attrs({ p: 2 })`
    width: 33.333333%
`

const Inner = Card.extend.attrs({ boxShadowSize: 'sm', bg: 'snow', color: 'black' })``

const ProjectCard = props => (
    <Base {...props}>
        <Inner>
            <Image src="https://via.placeholder.com/500x300" />
            <Heading.h3>My Project</Heading.h3>
        </Inner>
    </Base>
)

export default ProjectCard