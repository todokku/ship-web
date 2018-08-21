import { Box, Flex, Heading } from '@hackclub/design-system'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Intro from 'components/Intro'
import ProjectSection from 'components/ProjectSection'
import { Sidebar, SidebarSection } from 'components/Sidebar'
import TopicList from 'components/TopicList'
import UserCard from 'components/UserCard'

const topics = [
    'Web',
    'Mobile',
    'AI',
    'Virtual reality',
    'Hardware',
    'Blockchain',
    'Big data',
    'Gaming',
    'Tools',
    'Art'
]

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Helmet title="Home" />
                <Header />
                <Intro />
                <Flex flexDirection={['column', null, 'row']} justify="center" py={[4, null, 5]} px={[3, null, 4]}>
                    <Box.main w={[1, null, 3 / 4]}>
                        <ProjectSection title="Featured" icon="star" iconColor="yellow.4" />
                        <ProjectSection title="Trending" icon="fire" iconColor="red.4" />
                        <ProjectSection title="Recently shipped" icon="clock" iconColor="gray.4" />
                    </Box.main>
                    <Sidebar mt={[4, null, 0]} ml={[0, null, 4]} w={[1, null, 1 / 4]}>
                        <SidebarSection>
                            <Heading.h3 mb={3}>
                                Popular topics
                            </Heading.h3>
                            <TopicList topics={topics} />
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
                    </Sidebar>
                </Flex>
                <Footer />
            </Fragment>
        )
    }
}

export default Index