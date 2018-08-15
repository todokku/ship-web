import { Box, Flex } from '@hackclub/design-system'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Intro from 'components/Intro'
import ProjectSection from 'components/ProjectSection'
import Sidebar from 'components/Sidebar'

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Helmet title="Home" />
                <Header />
                <Intro />
                <Flex justify="center" py={5} px={4}>
                    <Box.main w={3 / 4}>
                        <ProjectSection title="Featured" icon="star" iconColor="yellow.4" />
                        <ProjectSection title="Trending" icon="fire" iconColor="red.4" />
                        <ProjectSection title="Recently shipped" icon="clock" iconColor="gray.4" />
                    </Box.main>
                    <Sidebar ml={4} w={1 / 4} />
                </Flex>
                <Footer />
            </Fragment>
        )
    }
}

export default Index