import { Box, Flex, Heading, Text } from '@hackclub/design-system'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Footer from 'components/Footer'
import Header from 'components/Header'
import LinkBox from 'components/LinkBox'
import LoadingBar from 'components/LoadingBar'
import MarkdownRenderer from 'components/MarkdownRenderer'
import { Sidebar, SidebarSection } from 'components/Sidebar'
import TopicList from 'components/TopicList'
import UserCard from 'components/UserCard'
import NotFound from 'pages/404'
import api from 'api'
import { timeSince } from 'helpers'

class Projects extends Component {
    state = {
        data: {},
        status: 'loading'
    }

    componentDidMount() {
        const pathPortions = this.props.location.pathname
            .split('/')
            .filter(v => v)
        // Path is /projects/:slug
        if (pathPortions.length > 1) {
            const slug = pathPortions[pathPortions.length - 1]
            api.get(`v1/projects/slug/${slug}`)
                .then(({ data }) => {
                    this.setState({ data, status: 'loaded' })
                })
                .catch(() => {
                    this.setState({ status: 'error' })
                })
        }
        // Path is just /projects
        else {
            this.setState({ status: 'error' })
        }
    }

    render() {
        const { data, status } = this.state
        switch (status) {
            case 'loading':
                return (
                    <Fragment>
                        <Header color="muted" />
                        <LoadingBar fill />
                    </Fragment>
                )
            case 'loaded':
                return (
                    <Fragment>
                        <Helmet title={data.name} />
                        <Header color="muted" />
                        <Flex
                            flexDirection={['column', null, 'row']}
                            justify="center"
                            pt={[5, null, 6]}
                            pb={4}
                            px={[3, null, 4]}
                        >
                            <Box.main w={[1, null, 3 / 4]}>
                                <Heading.h1 mb={1}>{data.name}</Heading.h1>
                                <Text color="muted">{data.tagline}</Text>
                                <MarkdownRenderer source={data.description} />
                                <Text color="muted" mt={3}>Added {timeSince(data.created_at)}</Text>
                            </Box.main>
                            <Sidebar mt={[4, null, 0]} ml={[0, null, 4]} w={[1, null, 1 / 4]}>
                                <SidebarSection>
                                    <Heading.h3 mb={3}>
                                        Links
                                    </Heading.h3>
                                    {data.links.length > 0
                                        ? (
                                            data.links.map(link => (
                                                <LinkBox href={link.url} target="_blank" key={link.id} />
                                            ))
                                        )
                                        : (
                                            <Text color="muted">No links specified.</Text>
                                        )}
                                </SidebarSection>
                                <SidebarSection>
                                    <Heading.h3 mb={3}>
                                        Topics
                                    </Heading.h3>
                                    {data.topics.length > 0
                                        ? (
                                            <TopicList topics={data.topics.map(topic => topic.name)} />
                                        )
                                        : (
                                            <Text color="muted">No topics specified.</Text>
                                        )}
                                </SidebarSection>
                                <SidebarSection>
                                    <Heading.h3 mb={3}>
                                        Created by
                                    </Heading.h3>
                                    {data.creators.length > 0
                                        ? (
                                            <Fragment>
                                                <UserCard />
                                                <UserCard />
                                                <UserCard />
                                                <UserCard />
                                            </Fragment>
                                        )
                                        : (
                                            <Text color="muted">No creators specified.</Text>
                                        )}
                                </SidebarSection>
                            </Sidebar>
                        </Flex>
                        <Footer />
                    </Fragment>
                )
            case 'error':
                return <NotFound />
        }
    }
}

export default Projects