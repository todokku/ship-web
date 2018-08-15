import { Box, Heading } from '@hackclub/design-system'
import React from 'react'
import Topic from 'components/Topic'
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
                Popular topics
            </Heading.h3>
            <Box style={{ marginTop: '-4px' }}>
                <Topic name="Web" />
                <Topic name="Mobile" />
                <Topic name="AI" />
                <Topic name="Virtual reality" />
                <Topic name="Hardware" />
                <Topic name="Blockchain" />
                <Topic name="Big data" />
                <Topic name="Game" />
                <Topic name="Tool" />
                <Topic name="Art" />
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