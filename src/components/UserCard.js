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

const sampleData = {
    username: 'orpheus',
    avatar_url: 'https://hackclub.com/team/orpheus.jpg',
    name: 'Prophet Orpheus'
}

const UserCard = ({ data = sampleData, ...props }) => (
    <Base to={`/users/${data.username}`} {...props}>
        <Avatar src={data.avatar_url} mr={2} />
        <Flex align="left" flexDirection="column">
            <Name>{data.name}</Name>
            <Text.span f={1} color="muted">@{data.username}</Text.span>
        </Flex>
    </Base>
)

export default UserCard