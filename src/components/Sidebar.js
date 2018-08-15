import { Box, Heading } from '@hackclub/design-system'
import React from 'react'
import Tag from 'components/Tag'
import UserCard from 'components/UserCard'

const SidebarSection = Box.extend.attrs({ bg: 'snow', p: 3 })`
    border-radius: ${({ theme }) => theme.radius};
    &:not(:first-child) {
        margin-top: ${({ theme }) => theme.space[4]}px;
    }
`

const Sidebar = props => (
    <Box {...props}>
        <SidebarSection>
            <Heading.h3 mb={3}>
                Popular tags
            </Heading.h3>
            <Box style={{ marginTop: '-4px' }}>
                <Tag name="Web" />
                <Tag name="Mobile" />
                <Tag name="AI" />
                <Tag name="Virtual reality" />
                <Tag name="Hardware" />
                <Tag name="Blockchain" />
                <Tag name="Big data" />
                <Tag name="Game" />
                <Tag name="Tool" />
                <Tag name="Art" />
            </Box>
        </SidebarSection>
        <SidebarSection>
            <Heading.h3 mb={3}>
                Top hackers
            </Heading.h3>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </SidebarSection>
    </Box>
)

export default Sidebar