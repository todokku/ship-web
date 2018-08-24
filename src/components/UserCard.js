import { Avatar, Flex, Text } from '@hackclub/design-system'
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

const UserCard = ({ name, username, avatarUrl, props }) => (
    <Base to={`/users/${username}`} {...props}>
        <Avatar src={avatarUrl} mr={2} />
        <Flex align="left" flexDirection="column">
            <Name>{name}</Name>
            <Text.span f={1} color="muted">@{username}</Text.span>
        </Flex>
    </Base>
)

export default UserCard