import { Box, Container, Heading, Text } from '@hackclub/design-system'
import React from 'react'
import { timeSince } from 'helpers'

const Base = Box.extend.attrs({ pt: 6, pb: 5 })``

const TopicIntro = ({ data, ...props }) => (
    <Base style={{ backgroundColor: data.color }} {...props}>
        <Container px={3} w={[1, null, 4 / 5]}>
            <Heading.h1 color="black" mb={2}>{data.name}</Heading.h1>
            <Text color="black" f={3}>{data.description}</Text>
            <Text color="muted" f={1}>Last updated {timeSince(data.updated_at)}</Text>
        </Container>
    </Base>
)

export default TopicIntro