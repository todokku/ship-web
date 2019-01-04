import { Avatar, Box, Container, Flex, Heading, Text, theme } from '@hackclub/design-system'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Footer from 'components/Footer'
import Header from 'components/Header'
import LoadingBar from 'components/LoadingBar'
import NotFound from 'components/NotFound'
import ProjectCard from 'components/ProjectCard'
import api from 'api'
import { timeSince } from 'helpers'

class Users extends Component {
    state = {
        projects: [],
        status: 'loading',
        user: {}
    }

    componentDidMount() {
        const pathPortions = this.props.location.pathname
            .split('/')
            .filter(v => v)
        // Path is /users/:username
        if (pathPortions.length > 1) {
            const username = pathPortions[pathPortions.length - 1]
            api.get(`v1/users/username/${username}`)
                .then(res => {
                    this.setState({ user: res.data, status: 'userLoaded' })
                    return res.data.id
                })
                .then(id => api.get(`v1/users/${id}/projects`))
                .then(res => {
                    this.setState({ projects: res.data, status: 'projectsLoaded' })
                })
                .catch(() => {
                    this.setState({ status: 'error' })
                })
        }
        // Path is just /users
        else {
            this.setState({ status: 'error' })
        }
    }

    render() {
        const { projects, status, user } = this.state
        switch (status) {
            case 'loading':
                return (
                    <Fragment>
                        <Header color="muted" />
                        <LoadingBar fill />
                    </Fragment>
                )
            case 'userLoaded':
            case 'projectsLoaded':
                return (
                    <Fragment>
                        <Helmet title={user.name} />
                        <Header color="muted" />
                        <Box bg="snow">
                            <Container pt={6} pb={4} px={3} w={[1, null, 4 / 5]}>
                                <Flex>
                                    <Avatar src="https://github.com/ifvictr.png" size={128} />
                                    {/* <Avatar src={user.avatar_url} size={128} /> */}
                                    <Box ml={3}>
                                        <Heading.h2 color="black">@{user.username}</Heading.h2>
                                        <Text color="muted" mt={1}>Joined {timeSince(user.created_at)}</Text>
                                    </Box>
                                </Flex>
                            </Container>
                        </Box>
                        <Box>
                            <Container py={4} px={3} w={[1, null, 4 / 5]}>
                                {projects.length > 0
                                    ? (
                                        <Flex style={{ margin: -theme.space[2] }} wrap>
                                            {projects.map(project => (
                                                <ProjectCard data={project} key={project.id} />
                                            ))}
                                        </Flex>
                                    )
                                    : status === 'projectsLoaded'
                                        ? (
                                            <Box bg="gray.1" align="center" my={4} p={3} style={{ borderRadius: theme.radius }}>
                                                <Text color="black" f={3}>This user doesn’t appear to have shipped anything yet…</Text>
                                            </Box>
                                        )
                                        : (
                                            <LoadingBar />
                                        )}
                            </Container>
                        </Box>
                        <Footer />
                    </Fragment>
                )
            case 'error':
                return <NotFound />
        }
    }
}

export default Users