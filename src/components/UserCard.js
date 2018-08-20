import { Avatar, Box, Flex, Text } from '@hackclub/design-system'
import Link from 'gatsby-link'
import React from 'react'

const Name = Text.span.extend``

const Base = Flex.withComponent(Link).extend.attrs({ align: 'center' })`
    border-radius: ${({ theme }) => theme.radius};
    &:not(:first-of-type) {
        margin-top: ${({ theme }) => theme.space[2]}px;
    }
    &:hover ${Name} {
        text-decoration: underline;
    }
`

const UserCard = props => (
    <Base to="/users/orpheus" {...props}>
        <Avatar src="https://hackclub.com/team/orpheus.jpg" mr={2} />
        <Flex align="left" flexDirection="column">
            <Name>Prophet Orpheus</Name>
            <Text.span f={1} color="muted">@orpheus</Text.span>
        </Flex>
    </Base>
)

export default UserCard