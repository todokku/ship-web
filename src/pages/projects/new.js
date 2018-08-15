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
                <Header />
                <style children={`
                    body {
                        background-color: ${cx('violet.3')};
                        background-image: url(/pattern.svg);
                        background-size: 20rem;
                    }
                `} />
                <Container pt={6} pb={5}>
                    <ProjectForm />
                </Container>
            </Fragment>
        )
    }
}

export default New