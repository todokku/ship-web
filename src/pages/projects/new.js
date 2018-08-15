import { Container, cx } from '@hackclub/design-system'
import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import ProjectForm from 'components/ProjectForm'

class New extends Component {
    render() {
        return (
            <Fragment>
                <Helmet title="Add a new project" />
                <Header color="slate" />
                {/* <style children={`
                    body {
                        background: linear-gradient(
                            24deg,
                            ${cx('blue.6')},
                            ${cx('indigo.2')}
                        );
                    }
                `} /> */}
                <Container px={4} pt={6} pb={5}>
                    <ProjectForm /* p={4} */ />
                </Container>
            </Fragment>
        )
    }
}

export default New