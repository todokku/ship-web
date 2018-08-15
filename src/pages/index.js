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
                <Flex flexDirection={['column', null, 'row']} justify="center" py={[4, null, 5]} px={[3, null, 4]}>
                    <Box.main w={[1, null, 3 / 4]}>
                        <ProjectSection title="Featured" icon="star" iconColor="yellow.4" />
                        <ProjectSection title="Trending" icon="fire" iconColor="red.4" />
                        <ProjectSection title="Recently shipped" icon="clock" iconColor="gray.4" />
                    </Box.main>
                    <Sidebar mt={[4, null, 0]} ml={[0, null, 4]} w={[1, null, 1 / 4]} />
                </Flex>
                <Footer />
            </Fragment>
        )
    }
}

export default Index